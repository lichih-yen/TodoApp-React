import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.list = action.payload;
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      const updatedTasks = [...state.list, newTask];
      state.list = updatedTasks;
    },
    changeTaskStatus: (state, action) => {
      const id = action.payload;
      let updatedTasks = [...state.list];
      for (let task of updatedTasks) {
        if (task.id === id) {
          task.done = !task.done;
        }
      }
      state.list = updatedTasks;
    },
    removeTasks: (state, action) => {
      const id = action.payload;
      let updatedTasks = state.list.filter((task) => task.id !== id);
      state.list = updatedTasks;
    },
    clearTasks: (state, action) => {
      state.list = [];
    },
  },
});

export const { setTasks, addTask, changeTaskStatus, removeTasks, clearTasks } =
  tasksSlice.actions;
export default tasksSlice.reducer;
