import React from 'react';

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  let badgeStyle = {
    width: 14,
    height: 14,
    borderRadius: '50%',
    display: 'inline-block',
    marginLeft: 8,
    marginRight: 0,
    verticalAlign: 'middle',
    border: '1.5px solid #e0e0e0',
    alignSelf: 'center',
    flexShrink: 0
  };
  if (task.priority === 1) badgeStyle.background = '#ff5252';
  if (task.priority === 2) badgeStyle.background = '#ffb300';
  if (task.priority === 3) badgeStyle.background = '#43a047';

  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', width: '100%', marginBottom: '12px', minHeight: '48px', boxSizing: 'border-box', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0, gap: '0.7rem', overflow: 'hidden' }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task)}
          style={{ marginRight: 8, flexShrink: 0, width: 16, height: 16 }}
        />
        <span style={{ display: 'flex', alignItems: 'center', minWidth: 0, gap: '0.5rem', flex: 1, overflow: 'hidden' }}>
          <span className="task-title-scroll" style={{ whiteSpace: 'nowrap', overflowX: 'auto', textOverflow: 'unset', fontWeight: task.completed ? 700 : 500, color: task.completed ? '#22c55e' : '#333', flexShrink: 1, maxWidth: '1000px', width: '100%', display: 'inline-block' }}>{task.task}</span>
        </span>
      </div>
      <div className="task-actions" style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', alignItems: 'center', justifyContent: 'flex-end', minWidth: 80, height: '100%' }}>
        <span className="priority-badge" style={badgeStyle}></span>
        <button className="delete-btn" style={{height: '32px', width: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => onDelete(task.id)}>Delete</button>
        <button className="edit-btn" style={{height: '32px', width: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center'}} onClick={() => {
          const newTask = prompt('Edit task:', task.task) || task.task;
          const newPriority = prompt('Edit priority (1=High, 2=Medium, 3=Low):', task.priority) || task.priority;
          onEdit(task, { ...task, task: newTask.trim(), priority: Number(newPriority) });
        }}>Edit</button>
      </div>
    </li>
  );
}

export default TaskItem;
