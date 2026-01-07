import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <span className="search-icon">🔍</span>
      </div>
      <div className="header-actions">
        <span className="notification-icon">🔔</span>
        <div className="user-avatar">U</div>
      </div>
    </div>
  );
}

export default Header;
