import React, { useState, useEffect } from 'react';
import timerStyle from '../styles/Timer.module.css';

const Timer = () => {
  const [counter, setCounter] = useState(false);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === 0) return setCounter(false);
    return () => clearInterval(timer);
  }, [counter]);
  return (
    <div className={timerStyle['timer-container']}>
      {counter && (
        <h3 className={timerStyle['timer-title']}>Descanso: {counter}s</h3>
      )}
      <button
        className={timerStyle['timer-btn']}
        onClick={() => setCounter(60)}
      >
        Iniciar contagem
      </button>
    </div>
  );
};

export default Timer;
