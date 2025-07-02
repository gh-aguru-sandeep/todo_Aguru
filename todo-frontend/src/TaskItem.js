import React from 'react';

function TaskItem({ task, deleteTask, toggleComplete, editTask }) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task)}
      />
      <span>{task.task}</span>
      <div className="task-actions">
        <button onClick={() => deleteTask(task.id)}>Delete</button>
        <button className="edit-btn" onClick={() => {
          const newTitle = prompt('Edit task:', task.task);
          if (newTitle !== null) editTask(task, newTitle.trim());
        }}>Edit</button>
      </div>
    </li>
  );
}

export default TaskItem;
