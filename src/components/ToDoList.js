import React, { useState } from "react";
import "../styles/ToDoList.css";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const inputModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTask = () => {
    if (input.trim()) {
      const toDoTask = {
        id: Date.now(),
        taskName: input,
        completed: false,
      };
      setTasks((prevTodos) => [...prevTodos, toDoTask]);
      setInput("");
      setShowModal(false);
    }
    console.log(tasks);
  };

  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <div className="controls">
        <button onClick={inputModal}>Add Task</button>
        <select>
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add a New Task</h2>
            <input
              type="text"
              placeholder="Enter a New task"
              value={input}
              onChange={handleInput}
            />
            <button onClick={addTask}>Save Task</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
