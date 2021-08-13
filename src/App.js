import React, { useState, useEffect } from "react";
import "./App.scss";
import Task from "./components/Task";
import EditModal from "./components/modals/Edit";
import DeleteModal from "./components/modals/Delete";
function App() {
  const [tasks, setTasks] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleCompleted = id => {
    let _tasks = tasks.filter(t => {
      if (t.id === id) {
        t.complete = !t.complete;
      }
      return t;
    });

    setTasks(_tasks);
  };

  useEffect(() => {
    //Fetch data from json
    fetch("./api/tasks.json")
      .then(response => response.json())
      .then(json => {
        setTasks(json);
      });
  }, []);

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <div>
        <button onClick={() => setModal({ name: "add" })}>add task</button>
      </div>
      <div id="tasks">
        {tasks === false
          ? "loading..."
          : tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              setTasks={setTasks}
              setModal={setModal}
              toggleCompleted={toggleCompleted}
            />
          ))}
      </div>
      <EditModal
        tasks={tasks}
        setTasks={setTasks}
        modal={modal}
        setModal={setModal}
      />
      <DeleteModal
        tasks={tasks}
        setTasks={setTasks}
        modal={modal}
        setModal={setModal}
      />
    </div>
  );
}

export default App;
