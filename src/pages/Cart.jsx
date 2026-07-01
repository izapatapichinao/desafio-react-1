import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserContext";
import { pizzaCart } from "../assets/js/pizzas";

export default function Cart() {
  const { cart, aumentarCantidad, disminuirCantidad, calcularTotal } =
    useContext(CartContext);

  const { token } = useContext(UserContext);

  return (
    <>
      <div className="container my-4" style={{ maxWidth: "500px" }}>
        <h4 className="mb-4">Detalles del pedido:</h4>

        {cart.map((item) => (
          <div
            key={item.id}
            className="d-flex justify-content-between align-items-center mb-3"
          >
            <div className="d-flex align-items-center">
              <img
                src={item.img}
                alt={item.name}
                className="rounded"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              <span className="ms-3 fw-medium">{item.name}</span>
            </div>

            <div className="d-flex align-items-center">
              <span className="me-4 fw-bold">
                ${(item.price * item.count).toLocaleString("es-CL")}
              </span>
              <button
                onClick={() => disminuirCantidad(item.id)}
                className="btn btn-outline-danger btn-sm px-3 fw-bold"
              >
                -
              </button>
              <span className="mx-3 fw-bold">{item.count}</span>
              <button
                onClick={() => aumentarCantidad(item.id)}
                className="btn btn-outline-primary btn-sm px-3 fw-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <h3 className="fw-bold mb-4">
            Total: ${calcularTotal.toLocaleString("es-CL")}
          </h3>
          <button disabled={!token} className="btn btn-dark btn-lg fw-bold">
            Pagar
          </button>
          {!token && (
            <p className="text-danger mt-2 fw-medium">
              Inicia sesión para pagar.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
