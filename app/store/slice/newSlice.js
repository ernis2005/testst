import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import axios from 'axios';

const backendURL = 'http://185.251.88.75/api/';

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

export const fetchData = createAsyncThunk(
  'general/news',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendURL}general/news/?page=1`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

const newSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
        console.log(action);
      });
  },
});

export const {} = newSlice.actions;
export default newSlice.reducer;
