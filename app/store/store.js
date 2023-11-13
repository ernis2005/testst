import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import newSlice from './slice/newSlice';
import faqSlice from './slice/faqSlice';
import registerSlice from './slice/registerSlice';
import modalSlice from './slice/modalSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    signup: registerSlice,
    news: newSlice,
    faq: faqSlice,
    modal: modalSlice,
  },
});

export default store;
