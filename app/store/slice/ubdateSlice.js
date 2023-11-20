import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userProfile } from './authSlice';
const backendURL = 'http://185.251.88.75/api/';

export const updateDate = createAsyncThunk(
  'users/update_user',
  async function (selectedFile, { rejectWithValue, dispatch }) {
    console.log(selectedFile);
    try {
      const token = localStorage.getItem('userToken')?.replaceAll('"', '');
      const formData = new FormData();
      formData.append('image_profile', selectedFile);
      const response = await axios.patch(
        `${backendURL}users/update_user/`,
        formData,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      dispatch(userProfile(token));
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const ubdateSlice = createSlice({
  name: 'modal',
  initialState: {
    photo: null,
    status: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateDate.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(updateDate.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.photo = action.payload;
    });
    builder.addCase(updateDate.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action;
    });
  },
});
export const {} = ubdateSlice.actions;
export default ubdateSlice.reducer;
