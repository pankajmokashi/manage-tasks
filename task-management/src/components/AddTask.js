import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuthenticated } from "../redux/actions/authActions";
import { createTask } from "../redux/actions/taskActions";

function AddTaskModal({ onClose }) {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
  });

  const handleAddTask = () => {
    dispatch(createTask(newTask));
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
          <button onClick={handleAddTask}>Add Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

function AddTask() {
  const [showModal, setShowModal] = useState(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div className="add-task-btn">
      <h2>Tasks</h2>
      {isAuthenticated ? (
        <button onClick={() => setShowModal(true)}>Add Task</button>
      ) : (
        <p className="login-text">Please login to add, update or delete tasks!</p>
      )}

      {showModal && (
        <AddTaskModal
          isAuthenticated={isAuthenticated}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default AddTask;
