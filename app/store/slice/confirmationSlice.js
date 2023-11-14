import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';
import { handleModal, handleTabClick } from './modalSlice';
import { userProfile } from './authSlice';

const backendURL = 'http://185.251.88.75/api/';

export const confirmationFetch = createAsyncThunk(
  'users/phone_verify',
  async (data, { rejectWithValue, dispatch }) => {
    const number = data.phone.replace(/\D/g, '');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        `${backendURL}users/phone_verify/`,
        {
          phone: number,
          code: data.code,
        },
        config,
      );
      console.log(response.data);
      dispatch(userProfile(response.data.token.access));
      localStorage.setItem(
        'userToken',
        JSON.stringify(response.data.token.access),
      );
      dispatch(handleTabClick(5));
      setTimeout(() => {
        dispatch(handleModal());
      }, 3000);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const confirmationSlice = createSlice({
  name: 'code',
  initialState: {
    loading: false,
    token: '',
    error: null,
  },
  reducers: {
    autoConfirtion: (state, { payload }) => {
      console.log(payload);
      // state.token = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(confirmationFetch.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(confirmationFetch.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.loading = false;
        state.token = payload.data.token.access;
      })
      .addCase(confirmationFetch.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        console.log(payload);
      });
  },
});
export const { autoConfirtion } = confirmationSlice.actions;
export default confirmationSlice.reducer;
