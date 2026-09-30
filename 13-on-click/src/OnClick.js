import React, { useState } from "react";

function OnClickExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tıklanma Sayısı: {count}</button>
    </div>
  );
}

export default OnClickExample;