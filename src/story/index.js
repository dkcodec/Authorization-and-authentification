import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReduser,
  },
});
