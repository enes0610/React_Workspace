import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const products = [
  { id: 1, name: "Laptop", price: 25000 },
  { id: 2, name: "Klavye", price: 1200 },
  { id: 3, name: "Monitör", price: 5000 },
  { id: 4, name: "Mouse", price: 800 },
  { id: 5, name: "Pad", price: 100 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h2>Ürünler</h2>

      {products.map((p) => (
        <div key={p.id} className="product">
          <span>{p.name}</span>
          <span>{p.price} TL</span>

          <button
            className="btn"
            onClick={() => dispatch(addToCart(p))}
          >
            Sepete Ekle
          </button>
        </div>
      ))}
    </div>
  );
}