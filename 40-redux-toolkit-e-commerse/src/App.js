import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">Redux Toolkit Sepet Yönetimi</h1>

      <div className="grid">
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}