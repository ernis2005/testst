import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
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

export const fetchFaq = createAsyncThunk(
  'general/faq',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${backendURL}general/faq/?page=1`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error);
    }
  },
);

const faqSlice = createSlice({
  name: 'faq',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaq.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchFaq.rejected, (state, action) => {
        state.loading = false;
        state.error = action;
        console.log(action);
      });
  },
});

export const {} = faqSlice.actions;
export default faqSlice.reducer;
