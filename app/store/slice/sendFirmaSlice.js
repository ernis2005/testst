import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleModal, handleTabClick } from './modalSlice';
import { userProfile } from './authSlice';

const backendURL = 'http://185.251.88.75/api/';

export const sendCodeFitchCode = createAsyncThunk(
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
      dispatch(sendCodeConfirtion(data));
      // dispatch(userProfile(response.data.access));
      localStorage.setItem('userToken', JSON.stringify(response.data.access));
      dispatch(handleTabClick(6));
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const sendFirmaSlice = createSlice({
  name: 'code',
  initialState: {
    loading: false,
    token: '',
    phone: '',
    error: null,
  },
  reducers: {
    sendCodeConfirtion: (state, action) => {
      state.token = action.payload;
      state.phone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendCodeFitchCode.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendCodeFitchCode.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.data.access;
    });
    builder.addCase(sendCodeFitchCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload.response.data;
    });
  },
});
export const { sendCodeConfirtion } = sendFirmaSlice.actions;
export default sendFirmaSlice.reducer;
