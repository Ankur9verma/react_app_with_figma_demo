import React from 'react';
import './SearchBar.css';

const SearchBar = ({ placeholder = "Search dish for your party ......", searchValue, onSearchChange }) => {
  return (
    <div className="search-bar">
      <div className="back-arrow">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8L10 12" stroke="#3D3D3D" strokeWidth="2"/>
        </svg>
      </div>
      <input 
        type="text" 
        placeholder={placeholder}
        className="search-input"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="search-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="7" cy="7" r="6" stroke="#3D3D3D" strokeWidth="2"/>
          <path d="m13 13 4.35 4.35" stroke="#3D3D3D" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;