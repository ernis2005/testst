import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';
import { handleTabClick } from './modalSlice';

const backendURL = 'http://185.251.88.75/api/';

export const registerUser = createAsyncThunk(
  'users/register',
  async (data, { rejectWithValue, dispatch }) => {
    const number = data.phone.replace(/\D/g, '');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const user = await axios.post(
        `${backendURL}users/register/`,
        {
          phone: number,
          full_name: data.full_name,
          password: data.password,
        },
        config,
      );
      console.log(user);
      dispatch(handleTabClick(4));
      return user.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const registerSlice = createSlice({
  name: 'signup',
  initialState: {
    isUser: false,
    loading: false,
    userInfo: '',
    error: null,
    success: false,
  },
  reducers: {
    autoRegister: (state, action) => {
      state.userInfo = action;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log(payload);
      });
  },
});
export const { autoRegister } = registerSlice.actions;
export default registerSlice.reducer;
