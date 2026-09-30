import React, { useState } from "react";

function OnChangeExample() {
  const [text, setText] = useState("");

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Metin Giriniz..."></input>
      <p>Girdiğiniz Metin: {text}</p>
    </div>
  );
}

export default OnChangeExample;