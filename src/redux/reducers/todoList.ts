import { ACTION } from "../types/actionTypes";



interface State {
    taskList: any[]
    completedList: any[]

    pendingList: any[]
}

// intial state
const initialState: State = {
    taskList: [],
    completedList: [],
    pendingList: []
};


const tasksreducer = (state = initialState, action: ACTION) => {
    switch (action.type) {

        case "ADD_TODO_LIST":
            return {
                ...state,
                taskList: [...state.taskList, action.payload],
            };


        case "DELETE_TODO_LIST":
            return {
                ...state,
                taskList: state.taskList.filter(
                    (task: any) => task.id !== action.payload
                ),
            };




        case "PENDING_TODO_LIST":

            return {
                ...state,
                pendingList: state.taskList.filter((list) => {
                    if (!list.isCompleted) {
                        return {
                            ...list,
                        }
                    }
                }
                ),
            };

        case "COMPLETED_TODO_LIST":

            return {
                ...state,
                completedList: state.taskList.filter((list) => {

                    if (list.isCompleted === true) {

                        return {
                            ...list,
                        }
                    }
                }
                ),
            };

        case "MARK_TASK_COMPLETE":

            return {
                ...state,
                taskList: state.taskList.map((list) => {
                    if (list.id === action.payload) {
                        return {
                            ...list,
                            isCompleted: !list.isCompleted
                        }
                    } else {
                        return {
                            ...list
                        }
                    }
                })
            }
        default:
            return state;
    }
};

export default tasksreducer;