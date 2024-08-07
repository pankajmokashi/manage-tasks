import React from "react";
import { deleteTask } from "../redux/actions/taskActions";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/actions/authActions";

function DeleteTask({ id }) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleDeletetask = () => {
    dispatch(deleteTask(id));
  };
  return (
    <>
      {isAuthenticated && (
        <button className="task-btn" onClick={() => handleDeletetask()}>
          Delete
        </button>
      )}
    </>
  );
}

export default DeleteTask;
