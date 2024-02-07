import { configureStore } from "@reduxjs/toolkit";
import users from "../reducers/userReducers";

export const store = configureStore({
  reducer: {
    counter: users,
  },
});
