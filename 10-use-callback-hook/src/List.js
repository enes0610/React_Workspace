import React, { useEffect, useState } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("📌 getItems fonksiyonu değişti, List yeniden çalıştı.");
    setItems(getItems());
  }, [getItems]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>Item: {item}</li>
      ))}
    </ul>
  );
}

export default List;