import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  // Sort tasks: High (1) first, then Medium (2), then Low (3)
  const sortedTasks = [...tasks].sort((a, b) => (a.priority || 3) - (b.priority || 3));
  return (
    <ul id="taskList">
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default TaskList;
