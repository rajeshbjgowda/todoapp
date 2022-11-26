import { ACTION } from "../types/actionTypes";



export const addTodoList = (data: string): ACTION => ({
    type: "ADD_TODO_LIST",
    payload: data
})

export const deleteTodoList = (id: number): ACTION => ({
    type: "DELETE_TODO_LIST",
    payload: id
})



export const completedTodoList = (): ACTION => ({
    type: "COMPLETED_TODO_LIST",

})

export const pendingTodoList = (): ACTION => ({
    type: "PENDING_TODO_LIST",

})

export const markTaskCompleted = (id: number): ACTION => ({
    type: "MARK_TASK_COMPLETE",
    payload: id

})