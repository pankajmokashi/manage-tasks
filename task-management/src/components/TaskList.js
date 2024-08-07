import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/actions/taskActions";
import Task from "./Task";

function TaskList() {
  const { tasks } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div className="task-container">
      {tasks.length > 0 ? (
        <>
          <div>Click on task title to view full task!</div>
          {tasks.map((task) => (
            <Task task={task} key={task._id} />
          ))}
        </>
      ) : (
        <div>No Tasks Added!</div>
      )}
    </div>
  );
}

export default TaskList;
