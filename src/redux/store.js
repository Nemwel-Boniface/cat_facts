import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./user/signUpSlice";

const store = configureStore({
  reducer: {
    signup: signUpSlice,
  }
})

export default store