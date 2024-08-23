import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todo: [
    { id: uuidv4(), newTodo: "Vacuum the carpet", isDone: false },
    { id: uuidv4(), newTodo: "Sweep", isDone: false },
    { id: uuidv4(), newTodo: "Wash the dishes", isDone: false },
  ],
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    removeTodo: (state, { payload }) => {
      const foundIdIndex = state.todo.findIndex((d) => d.id === payload);

      state.todo.splice(foundIdIndex, 1);
    },
    createTodo: (state, { payload }) => {
      state.todo.push({ ...payload, id: uuidv4() });
    },
    toggleDone: (state, { payload }) => {
      const foundIdIndex = state.todo.findIndex((d) => d.id === payload);
      foundIdIndex.isDone == !foundIdIndex.isDone;
    },
  },
});

const { reducer, actions } = todoSlice;

export const { removeTodo, createTodo, toggleDone } = actions;
export default reducer;
