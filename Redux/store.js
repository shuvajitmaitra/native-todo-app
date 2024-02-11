import { configureStore } from "@reduxjs/toolkit";

import TodoSlice from "./TodoSlice";
export default store = configureStore({
  reducer: {
    name: TodoSlice,
  },
});
