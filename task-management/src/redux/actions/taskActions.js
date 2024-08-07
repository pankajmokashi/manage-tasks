import axios from "axios";
import {
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "./types";
import { toast } from "react-toastify";

// const API_URL = `http://localhost:5000`;
const API_URL = "http://ec2-13-201-4-189.ap-south-1.compute.amazonaws.com";

const api = axios.create({
  baseURL: API_URL,
});

export const getTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks,
});

export const getTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error,
});

export const createTaskSuccess = (task) => ({
  type: CREATE_TASK_SUCCESS,
  payload: task,
});

export const createTaskFailure = (error) => ({
  type: CREATE_TASK_FAILURE,
  payload: error,
});

export const updateTaskSuccess = (task) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: task,
});

export const updateTaskFailure = (error) => ({
  type: UPDATE_TASK_FAILURE,
  payload: error,
});

export const deleteTaskSuccess = (taskId) => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskId,
});

export const deleteTaskFailure = (error) => ({
  type: DELETE_TASK_FAILURE,
  payload: error,
});

const authHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const fetchTasks = () => {
  return async (dispatch) => {
    try {
      const response = await api.get("/tasks");
      dispatch(getTasksSuccess(response.data));
      toast.success("Tasks fetched successfully!");
    } catch (error) {
      // dispatch(getTasksFailure(error.message));
      toast.error("Error fetching tasks.");
    }
  };
};

export const createTask = (task) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/tasks", task, authHeaders());
      dispatch(createTaskSuccess(response.data));
      toast.success("Task created successfully!");
    } catch (error) {
      // dispatch(createTaskFailure(error.message));
      toast.error("Error creating task.");
    }
  };
};

export const updateTask = (id, task) => {
  return async (dispatch) => {
    try {
      const response = await api.put(`/tasks/${id}`, task, authHeaders());
      dispatch(updateTaskSuccess(response.data));
      toast.success("Task updated successfully!");
    } catch (error) {
      // dispatch(updateTaskFailure(error.message));
      toast.error("Error updating task.");
    }
  };
};

export const deleteTask = (id) => {
  return async (dispatch) => {
    try {
      await api.delete(`/tasks/${id}`, authHeaders());
      dispatch(deleteTaskSuccess(id));
      toast.success("Task deleted successfully!");
    } catch (error) {
      // dispatch(deleteTaskFailure(error.message));
      toast.error("Error deleting task.");
    }
  };
};
