import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./user/signUpSlice";
import logInSlice from "./user/logInSlice";

const store = configureStore({
  reducer: {
    signup: signUpSlice,
    login: logInSlice,
  }
})

export default store