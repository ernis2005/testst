import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = 'http://185.251.88.75/api/';

export const historyData = createAsyncThunk(
  'general/api/video_call_history',
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.get(
        `${backendURL}general/api/video_call_history/?page=1`,
        config,
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const hestorySlice = createSlice({
  name: 'modal',
  initialState: {
    data: [],
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
      state.data = action.payload;
      console.log(action.payload);
    });
    builder.addCase(historyData.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action;
      console.log(action);
    });
  },
});
export const {} = hestorySlice.actions;
export default hestorySlice.reducer;
