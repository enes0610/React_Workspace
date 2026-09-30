import React, { useState, useEffect } from "react";
import "./App.css";

function LifecycleDemo() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Mount ve Update
  useEffect(() => {
    console.log("Component Mount veya Update oldu. Count:", count);

    // Cleanup (Unmount)
    return () => {
      console.log("Component Unmount oldu veya useEffect yeniden çalıştı.");
    };
  }, [count]); // count değiştiğinde çalışır

  return (
    <div className="container">
      <h1>React Lifecycle Demo</h1>

      <p>Count: {count}</p>
      <button className="btn" onClick={() => setCount(count + 1)}>Arttır</button>

      <button className="btn" onClick={() => setShow(!show)}>
        {show ? "Component Kaldır" : "Component Göster"}
      </button>

      {show && <ChildComponent />}
    </div>
  );
}

function ChildComponent() {
  useEffect(() => {
    console.log("Child Component Mount oldu.");

    return () => {
      console.log("Child Component Unmount oldu.");
    };
  }, []);

  return <p>Ben Child Component’im.</p>;
}

export default LifecycleDemo;