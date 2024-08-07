import React from "react";
import UpdateTask from "./updatetask";
import DeleteTask from "./DeleteTask";

function ViewTask({ task, onClose }) {
  return (
    <div className="view-modal">
      <div className="container">
        <div className="title">{task.title}</div>
        <div>
          <strong>Description</strong> - {task.description}
        </div>
        <div className="btns">
          <UpdateTask task={task} />
          <DeleteTask id={task._id} />
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default ViewTask;
