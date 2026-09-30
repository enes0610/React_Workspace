import React, { useReducer } from "react";
import "./App.css";
import { cartReducer, initialState } from "./CartReducer";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./App.css";

export default function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className="container">
      <h1 className="title">useReducer Sepet Yönetimi</h1>

      <div className="grid">
        <ProductList dispatch={dispatch} />
        <Cart cart={state.cart} dispatch={dispatch} />
      </div>
    </div>
  );
}