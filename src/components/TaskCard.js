import React from 'react';
import './TaskCard.css';

function TaskCard({ task, onEdit, onDelete }) {
  const getInitials = (name) => {
    return name ? name.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className="task-card">
      <div className="task-header">
        <div className="task-avatar">{getInitials(task.assignee)}</div>
        <div className="task-actions">
          <button className="task-action-btn" onClick={onEdit}>✎</button>
          <button className="task-action-btn" onClick={onDelete}>🗑</button>
        </div>
      </div>
      <p className="task-description">{task.description}</p>
    </div>
  );
}

export default TaskCard;
