import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import registerSlice from './slice/registerSlice';
import modalSlice from './slice/modalSlice';
import confirmationSlice from './slice/confirmationSlice';
import sendCodeSlice from './slice/sendCodeSlice';
import sendFirmaSlice from './slice/sendFirmaSlice';
import changeSlice from './slice/changeSlice';
import historySlice from './slice/historySlice';
import ubdateSlice from './slice/ubdateSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    signup: registerSlice,
    modal: modalSlice,
    code: confirmationSlice,
    sendCode: sendCodeSlice,
    cod: sendFirmaSlice,
    change: changeSlice,
    history: historySlice,
    photo: ubdateSlice,
  },
});

export default store;
