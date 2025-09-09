import React from 'react';
import './CategoryButtons.css';

const CategoryButtons = ({ categories, selectedCategory, onCategorySelect, selectedItems }) => {
  return (
    <div className="menu-categories">
      {categories.map((category) => (
        <button
          key={category.name}
          className={`category-btn ${selectedCategory === category.name ? 'selected' : ''}`}
          onClick={() => onCategorySelect(category.name)}
        >
          {category.name} ({selectedItems.size}/8)
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;