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
      dispatch(autoConfirtion(data));
      dispatch(userProfile(response.data.access));
      localStorage.setItem('userToken', JSON.stringify(response.data.access));
      dispatch(handleTabClick(5));
      setTimeout(() => {
        dispatch(handleModal());
      }, 2000);
      return response;
    } catch (error) {

      return rejectWithValue(error);
    }
  },
);

const confirmationSlice = createSlice({
  name: 'code',
  initialState: {
    loading: false,
    token: '',
    user: '',
    error: null,
  },
  reducers: {
    autoConfirtion: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(confirmationFetch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(confirmationFetch.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload;
   
    });
    builder.addCase(confirmationFetch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response;
     
    });
  },
});
export const { autoConfirtion } = confirmationSlice.actions;
export default confirmationSlice.reducer;
