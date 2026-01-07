import React from 'react';
import './TaskColumn.css';
import TaskCard from './TaskCard';

function TaskColumn({ title, tasks, onEdit, onDelete }) {
  const getColumnIcon = () => {
    if (title === 'To do') return '☐';
    if (title === 'In progress') return '⟳';
    return '✓';
  };

  const getColumnClass = () => {
    if (title === 'To do') return 'todo';
    if (title === 'In progress') return 'inprogress';
    return 'done';
  };

  return (
    <div className={`task-column ${getColumnClass()}`}>
      <div className="column-header">
        <span className="column-icon">{getColumnIcon()}</span>
        <span className="column-title">{title}</span>
      </div>
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard 
            key={task.id}
            task={task}
            onEdit={() => onEdit(task)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskColumn;
