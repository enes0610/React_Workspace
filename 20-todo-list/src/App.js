import React, { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">ToDo List</h1>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Yeni Görev Ekle"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}></input>
        <button className="btn btn-primary" onClick={addTask}>
          Ekle
        </button>
      </div>
      <ul className="list-group">
        {tasks.map((task) => (
          <Todo key={task.id} task={task} deleteTask={deleteTask} editTask={editTask}></Todo>
        ))}
      </ul>
    </div>
  );
}

export default App;