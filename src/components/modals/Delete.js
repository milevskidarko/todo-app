import React from "react";
import Modal from "../Modal";

const DeleteModal = ({ tasks, setTasks, modal, setModal }) => {
  const handleDelete = () => {
    const filtered = tasks.filter(t => {
      if (t.id === modal.task.id) {
        return false;
      }
      return t;
    });
    setTasks(filtered);
    setModal(false);
  };
  if (modal.name !== "delete") {
    return null;
  }
  return (
    <Modal setModal={setModal}>
      Are you sure?
      <button onClick={handleDelete}>delete</button>
    </Modal>
  );
};

export default DeleteModal;
