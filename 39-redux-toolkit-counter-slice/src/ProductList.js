import React from "react";

const products = [
  { id: 1, name: "Telefon", price: 20000 },
  { id: 2, name: "Kulaklık", price: 2000 },
  { id: 3, name: "Mouse", price: 800 },
];

export default function ProductList({ dispatch }) {
  return (
    <div className="box">
      <h2>Ürünler</h2>
      {products.map((p) => (
        <div key={p.id} className="product">
          <span>{p.name}</span>
          <span>{p.price} TL</span>
          <button
            onClick={() => dispatch({ type: "ADD", payload: p })}
            className="btn"
          >
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  );
}