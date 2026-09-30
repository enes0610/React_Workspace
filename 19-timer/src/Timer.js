import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">React Timer</h1>
      <h2 className="mb-4">{formatTime()}</h2>
      <div>
        <button className="btn btn-success me-2" onClick={() => setIsRunning(true)}>Başlat</button>
        <button className="btn btn-danger me-2"onClick={() => setIsRunning(false)}>Durdur</button>
        <button className="btn btn-secondary" onClick={resetTimer}>Sıfırla</button>
      </div>
    </div>
  );
};

export default Timer;