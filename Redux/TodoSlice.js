import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlices.actions;

export default todoSlices.reducer;
