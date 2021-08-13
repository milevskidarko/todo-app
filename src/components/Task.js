import React from "react";

const Task = ({ id, task, complete, setTasks, setModal, toggleCompleted }) => {
  const _task = {
    id: id,
    task: task
  };

  return (
    <div className="task">
      <div>
        <span
          className={"fas fa-check" + (complete ? " completed" : "")}
          onClick={() => toggleCompleted(id)}
        ></span>
      </div>
      <div>{task}</div>
      <div>
        <span
          className="far fa-edit"
          onClick={() =>
            setModal({
              name: "edit",
              task: _task
            })
          }
        ></span>
        <span
          className="fas fa-times"
          onClick={() =>
            setModal({
              name: "delete",
              task: _task
            })
          }
        ></span>
      </div>
    </div>
  );
};

export default Task;
