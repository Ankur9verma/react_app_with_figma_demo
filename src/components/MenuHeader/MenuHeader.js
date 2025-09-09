import React from 'react';
import './MenuHeader.css';

const MenuHeader = ({ title = "North Indian" }) => {
  return (
    <div className="menu-header">
      <h2>{title}</h2>
      <div className="dropdown-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 10L8 6L12 10" stroke="#3D3D3D" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default MenuHeader;