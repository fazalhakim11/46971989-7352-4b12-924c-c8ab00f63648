import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageSize: 10,
};

const pageSizeSlice = createSlice({
  name: "pageSizeSlice",
  initialState,
  reducers: {
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
    },
  },
});

export const { setPageSize } = pageSizeSlice.actions;
export default pageSizeSlice.reducer;
