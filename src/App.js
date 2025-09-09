import React from 'react';
import LandingPage from './LandingPage';
import './App.css';

function App() {
  const handleEnter = () => {
    alert('Continue button clicked! This would navigate to the main menu.');
  };

  return (
    <div className="App">
      <LandingPage onEnter={handleEnter} />
    </div>
  );
}

export default App;
