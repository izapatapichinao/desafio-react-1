import React from "react";

export default function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid px-4 py-2">
          <a className="navbar-brand" href="#">
            Pizzeria Mamma Mia!
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav container-fluid gap-1">
              <button type="button" className="btn btn-outline-light">
                <i className="fa-solid fa-pizza-slice"></i> Home
              </button>
              {/* Operador ternario */}
              {token ? (
                <>
                  <button type="button" className="btn btn-outline-light">
                    <i className="fa-solid fa-unlock"></i> Profile
                  </button>
                  <button type="button" className="btn btn-outline-light">
                    <i className="fa-solid fa-lock"></i> Logout
                  </button>
                </>
              ) : (
                <>
                  <button type="button" className="btn btn-outline-light">
                    <i className="fa-solid fa-lock"></i> Login
                  </button>
                  <button type="button" className="btn btn-outline-light">
                    <i className="fa-solid fa-lock"></i> Register
                  </button>
                </>
              )}
              <button type="button" className="btn btn-outline-info ms-auto">
                <i className="fa-solid fa-cart-shopping"></i> Total: ${total.toLocaleString("es-CL")}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
