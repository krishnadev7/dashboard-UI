// taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("tasks");
    return serializedState
      ? JSON.parse(serializedState)
      : { toDo: [], onProgress: [], completed: [], filters: {} };
  } catch (e) {
    console.error("Could not load tasks from localStorage", e);
    return { toDo: [], onProgress: [], completed: [], filters: {} };
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("tasks", JSON.stringify(state));
  } catch (e) {
    console.error("Could not save tasks to localStorage", e);
  }
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      const { task, section } = action.payload;
      state[section].push(task);
      saveState(state);
    },
    moveTask: (state, action) => {
      const { taskId, fromSection, toSection } = action.payload;
      const taskIndex = state[fromSection].findIndex(
        (task) => task.id === taskId
      );

      if (taskIndex !== -1) {
        const [movedTask] = state[fromSection].splice(taskIndex, 1);
        movedTask.status = toSection; 
        state[toSection].push(movedTask);
        saveState(state);
      }
    },
    filterTasks: (state, action) => {
      state.filters = action.payload;
    },
  },
});

export const { addTask, moveTask, filterTasks } = taskSlice.actions;
export default taskSlice.reducer;
