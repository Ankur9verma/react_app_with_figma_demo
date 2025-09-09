import React from 'react';
import './FoodDetailsModal.css';

const FoodDetailsModal = ({ item, isOpen, onClose, onRemove, onAdd, isSelected }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="food-details-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          {item.image ? (
            <img src={item.image} alt={item.name} />
          ) : (
            <div className="food-icon-large">
              {React.createElement(item.icon, { size: 120, color: '#FF8800' })}
            </div>
          )}
        </div>
        
        <div className="modal-content">
          <div className="modal-header">
            <div className="item-title-section">
              <div className="title-with-indicator">
                <h2>{item.name}</h2>
                <div className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                  <div className="dot"></div>
                </div>
              </div>
            </div>
            
            <button 
              className={`action-button ${isSelected ? 'remove' : 'add'}`} 
              onClick={() => isSelected ? onRemove(item) : onAdd(item)}
            >
              {isSelected ? 'Remove' : 'Add'}
            </button>
          </div>
          
          <div className="modal-details">
            <div className="description-section">
              <p className="full-description">
                North Indian Tandoori chicken is a dish made chicken marinated shgdhsdhgdshd is a dish made from chicken marinated
              </p>
            </div>
            
            <div className="ingredient-section">
              <div className="ingredient-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" stroke="#FF8800" strokeWidth="2"/>
                  <path d="M10 6v4l3 3" stroke="#FF8800" strokeWidth="2"/>
                </svg>
              </div>
              <span className="ingredient-text">Ingredient</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsModal;