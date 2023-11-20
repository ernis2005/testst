import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';
import { handleModal } from './modalSlice';

const backendURL = 'http://185.251.88.75/api/';
const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
 
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
      dispatch(handleModal(false));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

// export const userProfile = createAsyncThunk(
//   'users/profile',
//   async function (id, { dispatch }) {
//     try {
//       const response = await axios.get(`${backendURL}users/profile/`, {
//         headers: {
//           accept: 'application/json',
//           Authorization: `Bearer ${id}`,
//         },
//       });
//       dispatch(autoLogin(response));
//     } catch (error) {
//       return error;
//     }
//   },
// );
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
      const userData = response;
      dispatch(autoLogin(userData));
    } catch (error) {
      return error;
    }
  },
);

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    autoLogin: (state, action) => {
      state.userInfo = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      state.userToken = action.payload.data.tokens.access;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
    });
  },
});
export const { autoLogin } = authSlice.actions;
export default authSlice.reducer;
