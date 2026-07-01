import React, { useContext } from "react";
import { NavLink, Link } from "react-router";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserContext";

export default function Navbar() {
  const { token, logout } = useContext(UserContext);
  const { calcularTotal } = useContext(CartContext);
  const setActiveStyle = ({ isActive }) => {
    return isActive ? "active text-info" : "";
  };
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
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `btn btn-outline-light ${setActiveStyle({ isActive })}`
                }
              >
                <i className="fa-solid fa-pizza-slice"></i> Home
              </NavLink>

              {/* Operador ternario */}
              {token ? (
                <>
                  <NavLink to="/profile" className="btn btn-outline-light">
                    <i className="fa-solid fa-unlock"></i> Profile
                  </NavLink>

                  <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={logout}
                  >
                    <i className="fa-solid fa-lock"></i> Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `btn btn-outline-light ${setActiveStyle({ isActive })}`
                    }
                  >
                    <i className="fa-solid fa-lock"></i> Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    className={({ isActive }) =>
                      `btn btn-outline-light ${setActiveStyle({ isActive })}`
                    }
                  >
                    <i className="fa-solid fa-lock"></i> Register
                  </NavLink>
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
