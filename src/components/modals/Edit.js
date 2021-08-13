import React from "react";
import Modal from "../Modal";

const EditModal = ({ tasks, setTasks, modal, setModal }) => {
  const handleSubmit = e => {
    e.preventDefault();
    let _tasks = [...tasks];
    let fd = new FormData(e.target);
    if (modal.name === "add") {
      _tasks.push({
        id: Math.random(),
        task: fd.get("task"),
        completed: false
      });
    } else {
      _tasks = tasks.filter(t => {
        if (t.id === modal.task.id) {
          t.task = fd.get("task");
        }
        return t;
      });
    }
    setTasks(_tasks);
    setModal(false);
  };
  if (modal.name !== "edit" && modal.name !== "add") {
    return null;
  }
  return (
    <Modal setModal={setModal}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={modal.task ? modal.task.task : ""}
          name="task"
          placeholder="Task name"
        />
        <button>save</button>
      </form>
    </Modal>
  );
};

export default EditModal;
