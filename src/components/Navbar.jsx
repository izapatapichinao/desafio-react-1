import React, { useContext } from "react";
import { Link } from "react-router";
import { CartContext } from "../context/CartProvider";

export default function Navbar() {
  const token = false;
  const { calcularTotal } = useContext(CartContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid px-4 py-2">
          <Link to="/" className="navbar-brand">
            Pizzeria Mamma Mia!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav container-fluid gap-1">
              <Link to="/" className="btn btn-outline-light">
                <i className="fa-solid fa-pizza-slice"></i> Home
              </Link>

              {/* Operador ternario */}
              {token ? (
                <>
                  <Link to="/profile" className="btn btn-outline-light">
                    <i className="fa-solid fa-unlock"></i> Profile
                  </Link>

                  <button type="button" className="btn btn-outline-light">
                    <i className="fa-solid fa-lock"></i> Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline-light">
                    <i className="fa-solid fa-lock"></i> Login
                  </Link>

                  <Link to="/register" className="btn btn-outline-light">
                    <i className="fa-solid fa-lock"></i> Register
                  </Link>
                </>
              )}

              <Link to="/cart" className="btn btn-outline-info ms-auto">
                <i className="fa-solid fa-cart-shopping"></i> Total: $
                {calcularTotal.toLocaleString("es-CL")}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
