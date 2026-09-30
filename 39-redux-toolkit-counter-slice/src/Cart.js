import React from "react";

export default function Cart({ cart, dispatch }) {
  return (
    <div className="box">
      <h2>Sepet</h2>

      {cart.length === 0 && <p>Sepet boş...</p>}

      {cart.map((item) => (
        <div key={item.id} className="product">
          <span>{item.name}</span>
          <span>{item.price} TL</span>
          <button
            className="btn remove"
            onClick={() => dispatch({ type: "REMOVE", payload: item.id })}
          >
            Kaldır
          </button>
        </div>
      ))}
    </div>
  );
}