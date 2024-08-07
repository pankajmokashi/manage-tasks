import React, { useState } from "react";
import ViewTask from "./ViewTask";

function Task({ task }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="task">
        <div className="task-text">
          <strong
            style={{
              textTransform: "capitalize",
              cursor: "pointer",
            }}
            onClick={() => setShowModal(true)}
          >
            {task.title}
          </strong>{" "}
          <span className="hide">- {task.description}</span>
        </div>
      </div>
      {showModal && (
        <ViewTask task={task} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default Task;
