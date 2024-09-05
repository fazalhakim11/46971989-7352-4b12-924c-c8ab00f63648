import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
  },
});

export const { setEmployees } = employeesSlice.actions;
export default employeesSlice.reducer;
