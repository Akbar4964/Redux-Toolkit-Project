import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Actions/Action";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
