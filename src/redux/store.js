import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "@redux-devtools/extension";
import { taskReducer } from "./tasksReducer";
import { filtersReducer } from "./filterReducer";

const enhancer = devToolsEnhancer()

const rootReducer = combineReducers({tasks: taskReducer, filters: filtersReducer})

export const store = createStore(rootReducer,enhancer)
