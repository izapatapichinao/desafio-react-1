import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <div className="container text-center mt-5" style={{ minHeight: "60vh" }}>
        <div className="d-flex flex-column justify-content-center align-items-center h-100">
          <h1 className="display-1 fw-bold text-danger">404</h1>
          <h2 className="mb-4">¡Mamma Mía! Esta página no existe 🍕</h2>

          <Link to="/" className="btn btn-dark btn-lg fw-bold px-4">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </>
  );
}
