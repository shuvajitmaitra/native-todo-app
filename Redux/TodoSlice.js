import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  onGoingTodos: [],
};

const todoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.onGoingTodos = state.todos.filter(
        (todo, index) => index === action.payload
      );
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlices.actions;

export default todoSlices.reducer;
