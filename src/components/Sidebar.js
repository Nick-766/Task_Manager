import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-icon">◆</span>
        <span className="logo-text">TaskMinder.</span>
      </div>
      <nav className="nav-menu">
        <div className="nav-item">
          <span className="nav-icon">📊</span>
          <span>Dashboard</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">📁</span>
          <span>Projects</span>
        </div>
        <div className="nav-item active">
          <span className="nav-icon">✓</span>
          <span>Tasks</span>
        </div>
        <div className="nav-item">
          <span className="nav-icon">📅</span>
          <span>Calendar</span>
        </div>
      </nav>
      <div className="logout">
        <span className="logout-icon">←</span>
        <span>Log out</span>
      </div>
    </div>
  );
}

export default Sidebar;
