import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./types";
import { toast } from "react-toastify";

// const API_URL = `http://localhost:5000`;
const API_URL = "http://ec2-13-201-4-189.ap-south-1.compute.amazonaws.com"

const api = axios.create({
  baseURL: API_URL,
});

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await api.post("/login", credentials);
      const { token } = response.data;
      localStorage.setItem("token", token);
      dispatch(loginSuccess(token));
      toast.success("Login successful!");
    } catch (error) {
      // dispatch(loginFailure(error.message));
      toast.error("Login failed. Please check your credentials.");
    }
  };
};

export const register = (credentials) => {
  return async (dispatch) => {
    try {
      await api.post("/register", credentials);
      dispatch(registerSuccess());
      toast.success("Registration successful! Now Login to access.");
    } catch (error) {
      // dispatch(registerFailure(error.message));
      toast.error("Registration failed. Please try again.");
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch(logoutSuccess());
  };
};

// selectors.js
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
