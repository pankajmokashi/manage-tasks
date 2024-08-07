import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "../actions/types";

const initialState = {
  tasks: [],
  error: null,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        error: null,
      };
    case FETCH_TASKS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: null,
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
        error: null,
      };
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
        error: null,
      };
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
