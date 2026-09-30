import React, { useState, useCallback } from "react";
import "./App.css";
import List from "./List";

function UseCallbackDemo() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // useCallback yoksa fonksiyon her render'da yeniden oluşur.
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  return (
    <div className="container">
      <h1>useCallback Hook Örneği</h1>

      <div className="section">
        <h2>Sayıyı Değiştir</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
      </div>

      <div className="section">
        <h2>Fonksiyon Props Geçişi</h2>
        <List getItems={getItems} />
      </div>

      <div className="section">
        <h2>Normal State</h2>
        <p>Counter: {counter}</p>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          Counter +1
        </button>
      </div>
    </div>
  );
}

export default UseCallbackDemo;