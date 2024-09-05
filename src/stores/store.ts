import { configureStore } from "@reduxjs/toolkit";

import isShowReducer from "./slices/isShowSlice";
import employeesReducer from "./slices/employeesSlice";
import dataSlice from "./slices/dataSlice";
import pageSlice from "./slices/pageSlice";
import sortBySlice from "./slices/sortBySlice";
import orderSlice from "./slices/orderSlice";
import pageSizeSlice from "./slices/pageSizeSlice";

const store = configureStore({
  reducer: {
    isShow: isShowReducer,
    employees: employeesReducer,
    data: dataSlice,
    page: pageSlice,
    sortBy: sortBySlice,
    order: orderSlice,
    pageSize: pageSizeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
