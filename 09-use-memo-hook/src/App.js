import React, { useState, useMemo } from "react";
import "./App.css";

function UseMemoDemo() {
  const [number, setNumber] = useState(1);
  const [counter, setCounter] = useState(0);

  // Çok maliyetli hesaplama simülasyonu
  const expensiveCalculation = (num) => {
    console.log("❗ Maliyetli hesaplama çalıştı");
    let result = 0;
    for (let i = 0; i < 500; i++) {
      result += num;
    }
    return result;
  };

  // useMemo ile optimize edilmiş hesap
  const memoValue = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  return (
    <div className="container">
      <h1>useMemo Hook Örneği</h1>

      <div className="section">
        <h2>Maliyetli Hesaplama</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <p>Sonuç: {memoValue}</p>
      </div>

      <div className="section">
        <h2>Normal State</h2>
        <p>Counter: {counter}</p>
        <button className="btn" onClick={() => setCounter(counter + 1)}>
          Counter +1
        </button>
      </div>

      <p className="note">
        Counter değiştiğinde ağır hesaplama tekrar çalışmaz.  
        Sadece number değiştiğinde hesaplama yapılır.
      </p>
    </div>
  );
}

export default UseMemoDemo;