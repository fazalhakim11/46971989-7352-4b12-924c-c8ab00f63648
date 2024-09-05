import { configureStore } from '@reduxjs/toolkit';
import isShowReducer from "./slices/isShowSlice"

const store = configureStore({
  reducer: {
    isShow: isShowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
