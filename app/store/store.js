import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import registerSlice from './slice/registerSlice';
import modalSlice from './slice/modalSlice';
import confirmationSlice from './slice/confirmationSlice';
import sendCodeSlice from './slice/sendCodeSlice';
import sendFirmaSlice from './slice/sendFirmaSlice';
import changeSlice from './slice/changeSlice';
import historySlice from './slice/historySlice';
import newsSlide from './slice/newsSlide';

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
    news: newsSlide,
  },
});

export default store;
