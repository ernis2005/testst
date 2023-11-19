import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    value: 1,
    modal: false,
    profil: 1,
  },
  reducers: {
    handleTabClick: (state, action) => {
      state.value = action.payload;
    },
    handleModal: (state, action) => {
      state.modal = action.payload;
    },
    handleProfil: (state, action) => {
      state.profil = action.payload;
    },
  },
});
export const { handleTabClick, handleModal, handleProfil } = modalSlice.actions;
export default modalSlice.reducer;
