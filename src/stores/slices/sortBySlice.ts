import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortBy: "createdAt",
};

const sortBySlice = createSlice({
  name: "sortBy",
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
  },
});

export const { setSortBy } = sortBySlice.actions;
export default sortBySlice.reducer;
