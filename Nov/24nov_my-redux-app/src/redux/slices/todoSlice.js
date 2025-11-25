import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        task: action.payload
      };

      const exists = state.todos.some(
        t => t.task.toLowerCase() === action.payload.toLowerCase()
      );

      if (!exists) state.todos.push(newTask);
    }
  }
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;



