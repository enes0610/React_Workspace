import React, { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
      <p>Girdiğiniz metin: {text}</p>
    </div>
  );
}

export default InputExample;