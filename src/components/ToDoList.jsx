import React, { useState } from "react";
import './ToDoList.css';
function ToDoList() {
  let [task, setTask] = useState(["Homework", "Lunch in Afternoon"]);
  let [inputValue, setInputValue] = useState("");

  function HandleChange(event) {
    setInputValue(event.target.value);
  }

  function addTask() {
    if (inputValue.trim() !== "") {
      setTask((t) => [...t, inputValue]);
      setInputValue("");
    }
  }

  function deleteTask(index) {
    let updatedTasks = task.filter((_, i) => i !== index);
    setTask(updatedTasks);
  }

  return (
    <div>
      <h2>To Do List</h2>
      <input
      className="text-box"
        type="text"
        placeholder="Enter the Task"
        value={inputValue}
        onChange={HandleChange}
      ></input>
      <button className="add-btn" onClick={addTask}>Add List</button>
      {task.map((element, index) => (
        <div className="card" key={index}>
          <span className="task"
            style={{ textDecoration: "none" }}
            onClick={(e) =>
              (e.target.style.textDecoration =
                e.target.style.textDecoration === "none"
                  ? "line-through"
                  : "none")
            }
          >
            {element}
          </span>
          <button className="delete" onClick={() => deleteTask(index)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDoList;
