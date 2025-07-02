import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('2'); // Default to Medium

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTask({ task: task.trim(), priority: Number(priority), completed: false });
    setTask('');
    setPriority('2');
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Task title"
        style={{ minWidth: 0, flex: 2 }}
      />
      <label style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <span style={{ fontSize: '0.9em', color: '#01579b', marginBottom: 2 }}>Priority</span>
        <select value={priority} onChange={e => setPriority(e.target.value)}>
          <option value="1">High</option>
          <option value="2">Medium</option>
          <option value="3">Low</option>
        </select>
      </label>
      <button type="submit" style={{ flex: 1 }}>Add</button>
    </form>
  );
}

export default TaskForm;
