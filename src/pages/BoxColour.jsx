import React, { useState } from 'react';
import './boxclour.css';

function colorChange() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const getButtonColor = (buttonId) => {
    if (activeButton === buttonId) {
      return 'blue';
    } else if (activeButton !== null) {
      return 'gray';
    }
    return 'red';
  };

  return (
    <div className="App">
      <button
        onClick={() => handleButtonClick(1)}
        style={{ backgroundColor: getButtonColor(1) }}
      >
        Button 1
      </button>
      <button
        onClick={() => handleButtonClick(2)}
        style={{ backgroundColor: getButtonColor(2) }}
      >
        Button 2
      </button>
      <button
        onClick={() => handleButtonClick(3)}
        style={{ backgroundColor: getButtonColor(3) }}
      >
        Button 3
      </button>
    </div>
  );
}

export default colorChange;
