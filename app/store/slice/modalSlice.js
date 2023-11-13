import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: 1,
  },
  reducers: {
    handleTabClick: (state, { payload }) => {
      console.log(payload);
      state.value = payload;
    },
  },
});
export const { handleTabClick } = modalSlice.actions;
export default modalSlice.reducer;
