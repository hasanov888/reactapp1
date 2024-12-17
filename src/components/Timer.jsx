import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && time > 1) {
      interval = setInterval(() => setTime(prev => prev - 1), 1000);
    } else if (time === 1) {
      setIsRunning(false);
    }

    return () => clearInterval(interval); 
  }, [isRunning, time]);

  const startStop = () => setIsRunning(prev => !prev);
  const reset = () => setTime(0);

  const handleChange = (event) => {
    setTime(Number(event.target.value));
  };

  return (
    <div>
      <h1>Taymer</h1>
      <input 
        type="number" 
        value={time} 
        onChange={handleChange} 
        disabled={isRunning}
      />
      <p>{time} saniyə</p>
      <button onClick={startStop}>
        {isRunning ? 'Dayandır' : 'Başla'}
      </button>
      <button onClick={reset}>Təmizlə</button>
    </div>
  );
};

export default Timer;
