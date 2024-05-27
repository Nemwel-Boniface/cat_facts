import { configureStore } from '@reduxjs/toolkit';
import signUpSlice from './user/signUpSlice';
import logInSlice from './user/logInSlice';
import catFactsSlice from './catfacts/catFactsSlice';

const store = configureStore({
  reducer: {
    signup: signUpSlice,
    login: logInSlice,
    catfacts: catFactsSlice,
  },
});

export default store;
