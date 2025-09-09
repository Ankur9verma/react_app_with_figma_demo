import React from 'react';
import './IngredientsModal.css';

const IngredientsModal = ({ item, isOpen, onClose }) => {
  if (!isOpen || !item) return null;

  const ingredients = [
    { name: 'Cauliflower', quantity: '01 Pc' },
    { name: 'Mustard oil', quantity: '1/2 litres' },
    { name: 'Cauliflower', quantity: '01 Pc' },
    { name: 'Tomato', quantity: '01 Pc' }
  ];

  return (
    <div className="ingredients-page">
      <div className="ingredients-container">
        <button className="back-button" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#242424" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <h2 className="page-title">Ingredients</h2>

        <div className="dish-image">
          {item.image ? (
            <img src={item.image} alt={item.name} style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px'}} />
          ) : (
            React.createElement(item.icon, { size: 80, color: '#FF8800' })
          )}
        </div>

        <h3 className="dish-name">{item.name}</h3>
        <p className="dish-description">{item.description}</p>
        
        <h4 className="ingredients-title">Ingredients</h4>
        <span className="serving-info">For 2 people</span>
        
        <div className="divider"></div>
        
        <div className="ingredients-list">
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-item">
              <span className="ingredient-name">{ingredient.name}</span>
              <span className="ingredient-quantity">{ingredient.quantity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IngredientsModal;