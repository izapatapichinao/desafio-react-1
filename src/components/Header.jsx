import React from "react";
import "../assets/css/Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h1 className="fs-1 fw-bold">¡Pizzería Mamma Mia!</h1>
          <p className="fs-4">¡Tenemos las mejores pizzas que podrás encontrar!</p>
          <hr />
        </div>
      </div>
    </>
  );
}
