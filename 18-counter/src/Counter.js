import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Counter</h1>
      <p className="count-display">Sayı: <span>{count}</span></p>
      <button className="btn btn-primary" onClick={increment}> Sayacı Arttır </button>
      <button className="btn btn-primary" onClick={decrement}> Sayacı Azalt </button>
    </div>
  );
}

export default Counter;