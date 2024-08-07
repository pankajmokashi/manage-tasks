import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import taskReducer from "./redux/reducers/taskReducer";
import authReducer from "./redux/reducers/authReducer";

const rootReducer = combineReducers({
  tasks: taskReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
