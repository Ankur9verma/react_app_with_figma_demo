import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, isSelected, onAdd, onClick, onIngredientsClick }) => {
  return (
    <div className="menu-item" onClick={() => onClick && onClick(item)}>
      <div className="item-details">
        <div className="item-header">
          <h3>{item.name}</h3>
          <div className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
            <div className="dot"></div>
          </div>
        </div>
        
        <p className="item-description">{item.description}</p>
        
        <div className="item-actions">
          <div className="ingredient-info" onClick={(e) => { e.stopPropagation(); onIngredientsClick && onIngredientsClick(item); }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="#FF8800" strokeWidth="2"/>
              <path d="M9 5v4l3 3" stroke="#FF8800" strokeWidth="2"/>
            </svg>
            <span>Ingredient</span>
          </div>
        </div>
      </div>
      
      <div className="item-image">
        {item.image ? (
          <img src={item.image} alt={item.name} className="food-image" />
        ) : (
          <div className="food-icon">
            {React.createElement(item.icon, { size: 60, color: '#FF8800' })}
          </div>
        )}
        <button className={`add-button ${isSelected ? 'selected' : ''}`} onClick={(e) => { e.stopPropagation(); onAdd && onAdd(item); }}>
          <span>{isSelected ? 'Added' : 'Add'}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            {isSelected ? (
              <path d="M3 8L8 13L13 3" stroke="#E2574C" strokeWidth="2"/>
            ) : (
              <path d="M8 3V13M3 8H13" stroke="#73AE78" strokeWidth="2"/>
            )}
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuItem;