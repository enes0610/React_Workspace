import React, { useRef, useState } from "react";
import "./App.css";

function UseRefDemo() {
  const inputRef = useRef(null); // DOM referansı
  const countRef = useRef(0);    // Mutable değer (re-render etmez)
  const [renderCount, setRenderCount] = useState(0);

  const handleFocus = () => {
    inputRef.current.focus(); // input elementine focus
  };

  const incrementRef = () => {
    countRef.current += 1; // mutable değer artırılır
    console.log("countRef değeri:", countRef.current);
  };

  const incrementRender = () => {
    setRenderCount(renderCount + 1); // state değiştirir -> re-render
  };

  return (
    <div className="container">
      <h1>useRef Hook Örneği</h1>

      <div className="section">
        <h2>DOM Erişimi</h2>
        <input type="text" placeholder="Buraya yaz..." ref={inputRef} />
        <button className="btn" onClick={handleFocus}>
          Inputa Focus Ver
        </button>
      </div>

      <div className="section">
        <h2>Mutable Değer (Re-render Etmez)</h2>
        <p>countRef değeri konsola bakınız</p>
        <button className="btn" onClick={incrementRef}>
          countRef +1
        </button>
      </div>

      <div className="section">
        <h2>Normal State (Re-render)</h2>
        <p>renderCount: {renderCount}</p>
        <button className="btn" onClick={incrementRender}>
          renderCount +1
        </button>
      </div>
    </div>
  );
}

export default UseRefDemo;