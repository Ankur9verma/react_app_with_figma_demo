import React from 'react';
import './FilterSwitches.css';

const FilterSwitches = ({ selectedCategory, vegFilter, nonVegFilter, selectedItemsCount, onVegToggle, onNonVegToggle }) => {
  return (
    <div className="selection-row">
      <div className="selection-text">
        <span>{selectedCategory} Selected ({selectedItemsCount})</span>
      </div>
      <div className="filter-switches">
        <div className="switch-container" onClick={onVegToggle}>
          <div className={`veg-indicator-switch ${vegFilter ? 'active' : ''}`}>
            <div className="dot"></div>
          </div>
          <div className={`switch-track ${vegFilter ? 'active' : ''}`}></div>
        </div>
        <div className="switch-container" onClick={onNonVegToggle}>
          <div className={`non-veg-indicator-switch ${nonVegFilter ? 'active' : ''}`}>
            <div className="dot"></div>
          </div>
          <div className={`switch-track ${nonVegFilter ? 'active' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default FilterSwitches;