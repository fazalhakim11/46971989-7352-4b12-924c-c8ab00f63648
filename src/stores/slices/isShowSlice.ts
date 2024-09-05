import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShow: false,
};

const userSlice = createSlice({
  name: "isShow",
  initialState,
  reducers: {
    shows: (state) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { shows } = userSlice.actions;
export default userSlice.reducer;
