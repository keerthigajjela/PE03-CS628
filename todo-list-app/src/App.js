import React, { useState } from "react"; // Import React and useState
import TodoList from "./TodoList"; // Import the TodoList component
import "./App.css"; // Import CSS for styling

function App() {
  // managing the list of tasks
  const [tasks, setTasks] = useState([]);
  
  // storing the value of the input field
  const [task, setTask] = useState("");

  // Function to add a new task to the list
  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks

    // Updating the tasks state by adding a new task
    setTasks([...tasks, task]); 
    
    setTask(""); 
  };

  // Function to delete a task based on its index
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Filter out the selected task
  };

  return (
    <div className="container"> 
      <h2 className="title">ToDo List App</h2>
      
      //Input section for adding tasks 
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter task description"
          value={task}
          onChange={(e) => setTask(e.target.value)} // Update input state on change
        />
        <button onClick={addTask} className="addButton">
          Add Task
        </button>
      </div>

      {/* Render the list of tasks using the TodoList component */}
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App; 
