import React from 'react';
import './App.css'; // Apply styling
function TodoList({ tasks, deleteTask }) {

return (
<ul className="list-container">
{tasks.map((task, index) => (
<li key={index} className="list-item">
{task}
<button onClick={() => deleteTask(index)} className="deleteButton">
Delete
</button>
</li>
))}
</ul>
);
}
export default TodoList;
