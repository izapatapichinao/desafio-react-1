import React, { useState } from "react";
import { pizzaCart } from "../assets/js/pizzas";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  function aumentarCantidad(id) {
    const actualizarCarrito = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCart(actualizarCarrito);
  }

  function disminuirCantidad(id) {
    const actualizarCarrito = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0);

    setCart(actualizarCarrito);
  }

  function calcularTotal() {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  }

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
                ${item.price.toLocaleString("es-CL")}
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
            Total: ${calcularTotal().toLocaleString("es-CL")}
          </h3>
          <button className="btn btn-dark btn-lg fw-bold">Pagar</button>
        </div>
      </div>
    </>
  );
}
