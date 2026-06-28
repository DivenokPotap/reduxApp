import { nanoid } from "nanoid"

const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ];

export const addTask = (text) => {
    return {
        type : "tasks/addTask",
        payload : {
            id: nanoid(),
            completed: false,
            text,
        }
    }
}

export const deleteTask = (taskid) => {
    return {
        type : "tasks/deleteTask",
        payload : taskid
    }
}

export const toggleCompleted = (taskid) => {
    return {
        type : "tasks/toggleCompleted",
        payload : taskid
    }
}

export const taskReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        case "tasks/addTask":
          return [...state, action.payload];
        case "tasks/deleteTask":
          return state.filter(task => task.id !== action.payload);
        case "tasks/toggleCompleted":
          return state.map(task => {
            if (task.id !== action.payload) {
              return task;
            }
            return { ...task, completed: !task.completed };
          });
        default:
          return state;
      }
}