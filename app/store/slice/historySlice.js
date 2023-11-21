import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const backendURL = 'http://185.251.88.75/api/';

export const historyData = createAsyncThunk(
  'general/api/video_call_history',
  async function (queryParams) {
    console.log(queryParams, 'queryParams');
    try {
      const token = localStorage.getItem('userToken')?.replaceAll('"', '');
      const response = await axios.get(
        `${backendURL}general/api/video_call_history/?`,
        {
          params: {
            created_at__gte: queryParams.created_at__gte,
            created_at__lte: queryParams.created_at__lte,
            page: 1,
          },

          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

const hestorySlice = createSlice({
  name: 'modal',
  initialState: {
    history: [],
    status: 'idle',
    error: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(historyData.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(historyData.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.history = action.payload;
    });
    builder.addCase(historyData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action;
    });
  },
});
export const {} = hestorySlice.actions;
export default hestorySlice.reducer;
