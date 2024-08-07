import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "../redux/actions/taskActions";
import { selectIsAuthenticated } from "../redux/actions/authActions";

function UpdateTaskModal({ task, onClose }) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    title: task.title,
    description: task.description,
  });

  const handleUpdateTask = async () => {
    dispatch(updateTask(task._id, newTask));
    onClose();
  };

  return (
    <div className="modal">
      <div className="container">
        <h2>Add New Task</h2>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Description"
            value={newTask.description}
            onChange={(e) =>
              setNewTask({ ...newTask, description: e.target.value })
            }
          />
        </div>
        <div>
          <button onClick={handleUpdateTask}>Update Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function UpdateTask({ task }) {
  const [showModal, setShowModal] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <button onClick={() => setShowModal(true)}>Update</button>
      )}

      {showModal && (
        <UpdateTaskModal
          task={task}
          isLoggedIn={isAuthenticated}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default UpdateTask;
