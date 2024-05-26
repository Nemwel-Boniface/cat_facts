import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: null,
  data: null,
}

const catFactsSlice = createSlice({
  name: 'catfacts',
  initialState,
  reducers: {
    fetchCatFacts: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchCatFactsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
    fetchCatFactsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
})

export const { fetchCatFacts, fetchCatFactsSuccess, fetchCatFactsFailure } = catFactsSlice.actions;

export default catFactsSlice.reducer;