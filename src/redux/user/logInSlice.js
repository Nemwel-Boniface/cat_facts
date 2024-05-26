import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  success: false,
  error: null,
  token: null,
  isLoggedIn: false,
  user: null,
};

const logInSLice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logInRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    logInSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.token = action.payload;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logInFailure: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      state.error = null;
      state.success = false;
    },
    logOutFailure: (state, action) => {
      state.isLoggedIn = true;
      state.error = action.payload;
    },
  },
});

export const {
  logInRequest, logInSuccess, logInFailure, logout, logOutFailure
} = logInSLice.actions;

export default logInSLice.reducer;
