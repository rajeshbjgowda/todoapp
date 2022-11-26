import { combineReducers } from "redux";
import tasksreducer from './reducers/todoList';



export const rootReducer = combineReducers({ tasksreducer })

export type RootState = ReturnType<typeof rootReducer>