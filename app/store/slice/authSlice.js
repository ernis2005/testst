import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';

const backendURL = 'http://185.251.88.75/api/';
const initialState = {
  isUser: false,
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};
export const userLogin = createAsyncThunk(
  'users/login',
  async ({ login, password }, { rejectWithValue, dispatch }) => {
    const number = login.replace(/\D/g, '');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const data = await axios.post(
        `${backendURL}users/login/`,
        {
          login: number,
          password: password,
        },
        config,
      );
      dispatch(userProfile(data.data.tokens.access));
      localStorage.setItem(
        'userToken',
        JSON.stringify(data.data.tokens.access),
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const userProfile = createAsyncThunk(
  'users/profile',
  async function (id, { dispatch }) {
    try {
      const response = await axios.get(`${backendURL}users/profile/`, {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${id}`,
        },
      });
      dispatch(autoLogin(response));
    } catch (error) {
      return error;
    }
  },
);

// export const registerUser = createAsyncThunk(
//   'users/register',
//   async (data, { rejectWithValue }) => {
//     const number = data.phone.replace(/\D/g, '');
//     console.log(data);
//     console.log(typeof number);
//     try {
//       // const config = {
//       //   headers: {
//       //     'Content-Type': 'application/json',
//       //   },
//       // };
//       const user = await axios.post(
//         `${backendURL}users/register`,
//         {
//           phone: number,
//           full_name: data.full_name,
//           password: data.password,
//         },
//         // config,
//       );
//       console.log(user);
//       return user.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error);
//     }
//   },
// );

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    autoLogin: (state, action) => {
      state.userInfo = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isUser = true;
        state.userInfo = payload;
        state.userToken = payload.data.tokens.access;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload.response.data.detail || 'An error occurred';
        console.log(payload.response.data.detail);
      });
  },
});
export const { autoLogin } = authSlice.actions;
export default authSlice.reducer;
