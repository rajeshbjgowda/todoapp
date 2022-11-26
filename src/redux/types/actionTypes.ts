
interface addTodoList {
    type: "ADD_TODO_LIST",
    payload: any
}

interface deleteTodoList {
    type: "DELETE_TODO_LIST",
    payload: any
}

interface updateTodoList {
    type: "UPDATE_TODO_LIST",
    payload: any
}

interface pendingTodoList {
    type: "PENDING_TODO_LIST",

}

interface completedTodoList {
    type: "COMPLETED_TODO_LIST",

}

interface markTaskComplete {
    type: "MARK_TASK_COMPLETE",
    payload: number
}

export type ACTION = addTodoList | deleteTodoList | updateTodoList | pendingTodoList | completedTodoList | markTaskComplete