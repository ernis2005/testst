import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleModal, handleTabClick } from './modalSlice';
import { confirmationFetch } from './confirmationSlice';
import { userProfile } from './authSlice';
const backendURL = 'http://185.251.88.75/api/';

export const sendCodeFitch = createAsyncThunk(
  'users/send_code_phone',
  async ({ phone }, { rejectWithValue, dispatch }) => {
    const number = phone.replace(/\D/g, '');
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const data = await axios.post(
        `${backendURL}users/send_code_phone/`,
        {
          phone: number,
        },
        config,
      );
      console.log(data);
      dispatch(sendCodePhone(phone));
      dispatch(handleTabClick(7));
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const sendCodeSlice = createSlice({
  name: 'sendCode',
  initialState: {
    loading: false,
    phone: null,
    error: null,
    success: false,
  },
  reducers: {
    sendCodePhone: (state, action) => {
      state.phone = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendCodeFitch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendCodeFitch.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(sendCodeFitch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});
export const { sendCodePhone } = sendCodeSlice.actions;
export default sendCodeSlice.reducer;
