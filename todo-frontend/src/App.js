import React, { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const API_URL = 'http://localhost:8080/api/todos';

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...task, completed: false })
    });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
  };

  const toggleComplete = async (taskObj) => {
    await fetch(`${API_URL}/${taskObj.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...taskObj, completed: !taskObj.completed })
    });
    fetchTasks();
  };

  const editTask = async (taskObj, newTask) => {
    await fetch(`${API_URL}/${taskObj.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newTask })
    });
    fetchTasks();
  };

  return (
    <>
      <div className="app-bg"></div>
      <div className="todo-container">
        <h1>To Do List</h1>
        <TaskForm addTask={addTask} />
        <h2>Task List</h2>
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleComplete}
          onEdit={editTask}
        />
        <div id="taskSummary">
          Completed: {tasks.filter(t => t.completed).length} | Uncompleted: {tasks.filter(t => !t.completed).length}
        </div>
      </div>
    </>
  );
}

export default App;
