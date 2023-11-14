import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: 1,
    modal: false,
  },
  reducers: {
    handleTabClick: (state, { payload }) => {
      console.log(payload);
      state.value = payload;
    },
    handleModal: (state, { payload }) => {
      console.log(payload);
      state.modal = payload;
    },
  },
});
export const { handleTabClick, handleModal } = modalSlice.actions;
export default modalSlice.reducer;
