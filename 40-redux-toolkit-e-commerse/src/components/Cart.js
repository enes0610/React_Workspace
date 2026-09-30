import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="box">
      <h2>Sepet</h2>

      {items.length === 0 && <p>Sepet boş...</p>}

      {items.map((item) => (
        <div key={item.id} className="product">
          <span>{item.name}</span>
          <span>{item.price} TL</span>

          <button
            className="btn remove"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            Kaldır
          </button>
        </div>
      ))}

      {items.length > 0 && (
        <h3 className="total">
          Toplam:{" "}
          {items.reduce((total, item) => total + item.price, 0)} TL
        </h3>
      )}
    </div>
  );
}