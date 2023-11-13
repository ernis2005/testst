import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice';
import newSlice from './slice/newSlice';
import faqSlice from './slice/faqSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    news: newSlice,
    faq: faqSlice,
  },
});

export default store;
