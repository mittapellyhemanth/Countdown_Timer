
import React, { useState, useEffect } from 'react';
import './App.css'
function App() {

  const [inputValue, setInputValue] = useState('');
  const [countdownTime, setCountdownTime] = useState(0);

  useEffect(() => {
    let countdownInterval;

    if (countdownTime > 0) {
      countdownInterval = setInterval(() => {
        setCountdownTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(countdownInterval);
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [countdownTime]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const inputTime = parseFloat(inputValue);
      const newCountdownTime = isNaN(inputTime) ? 0 : Math.floor(inputTime);

      setCountdownTime(newCountdownTime);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <div className='title'>
  <h1>CountDown Timer </h1>
      </div>
      <div className='timer-container'>
      <input
        type="text"
        placeholder="Enter time (integer)"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <div id="current-time">{countdownTime}</div>
    </div>
   </div>
  );
}

export default App;
