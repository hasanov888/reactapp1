import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setSeconds(prev => prev + 1), 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isRunning]);

  const startStop = () => setIsRunning(prev => !prev);
  const reset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div>
      <h1>Saniyəölçən</h1>
      <p>{seconds} saniyə</p>
      <button onClick={startStop}>
        {isRunning ? 'Dayandır' : 'Başla'}
      </button>
      <button onClick={reset}>Təmizlə</button>
    </div>
  );
};

export default Stopwatch;
