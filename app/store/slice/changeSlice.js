import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';
import { handleModal, handleTabClick } from './modalSlice';
import { userProfile } from './authSlice';

const backendURL = 'http://185.251.88.75/api/';

export const changeFirtch = createAsyncThunk(
  'users/set_new_password',
  async (data, { rejectWithValue, dispatch }) => {
    const number = data.phone.replace(/\D/g, '');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.patch(
        `${backendURL}users/set_new_password/`,
        {
          phone: number,
          code: data.code,
          password: data.password,
        },
        config,
      );
      console.log(response);
      dispatch(handleTabClick(5));
      const token = JSON.parse(localStorage.getItem('userToken'));
      dispatch(userProfile(token));
      setTimeout(() => {
        dispatch(handleModal());
      }, 2000);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const changeSlice = createSlice({
  name: 'change',
  initialState: {
    loading: false,
    token: '',
    error: null,
  },
  reducers: {
    autoChange: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(changeFirtch.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changeFirtch.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.token = action.payload;
    });
    builder.addCase(changeFirtch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { autoChange } = changeSlice.actions;
export default changeSlice.reducer;
