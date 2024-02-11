import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  onGoingTodos: [],
  doneWorks: [],
};

const todoSlices = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
    onGoing: (state, action) => {
      state.onGoingTodos.push(
        state.todos.find((todo, index) => index === action.payload)
      );
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
    doneWorks: (state, action) => {
      state.doneWorks.push(
        state.onGoingTodos.find((todo, index) => index === action.payload)
      );
      state.onGoingTodos = state.onGoingTodos.filter(
        (todo, index) => index !== action.payload
      );
    },
  },
});

export const { addTodo, deleteTodo, onGoing, doneWorks } = todoSlices.actions;

export default todoSlices.reducer;
