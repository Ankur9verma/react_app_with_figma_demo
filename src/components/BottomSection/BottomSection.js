import React from 'react';
import './BottomSection.css';

const BottomSection = ({ totalSelected = 0, onContinue }) => {
  return (
    <div className="bottom-section">
      <div className="total-row">
        <div className="total-text">
          <span>Total Dish Selected {totalSelected}</span>
        </div>
        <div className="right-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="#3D3D3D" strokeWidth="2"/>
          </svg>
        </div>
      </div>
      
      <div className="continue-row">
        <button className="continue-btn" onClick={onContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default BottomSection;