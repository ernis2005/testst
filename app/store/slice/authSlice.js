import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  full_name: '',
  password: '',
  phone: '',
  loading: false,
  error: '',
  isAutor: false,
};

export const signUpUser = createAsyncThunk(
  'data/fetchData',
  async (requestData, { rejectWithValue }) => {
    try {
      const phoneNumberWithoutMask = requestData.login.replace(/\D/g, '');

      const data = {
        login: phoneNumberWithoutMask,
        password: requestData.password,
      };
      const response = await axios.post(
        'http://185.251.88.75/api/users/login/',
        data,
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUpUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signUpUser.fulfilled]: (state, { payload: { error } }) => {
      // state.loading = false;
      // if (error) {
      //   state.error = error;
      // } else {
      //   state.msg = msg;
      // }
    },
    [signUpUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default authSlice.reducer;
