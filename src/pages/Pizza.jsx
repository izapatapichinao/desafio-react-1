import React, { useContext } from "react";
import { useParams } from "react-router";
import { PizzaContext } from "../context/PizzaProvider";
import { CartContext } from "../context/CartProvider";

export default function Pizza() {
  const { pizzas } = useContext(PizzaContext);
  const { agregarCarrito } = useContext(CartContext);

  const { id } = useParams();
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mt-5" style={{ maxWidth: "900px" }}>
        <div className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-5">
              <img
                src={pizza.img}
                className="img-fluid rounded-start w-100 h-100"
                alt={pizza.name}
                style={{ objectFit: "cover", minHeight: "350px" }}
              />
            </div>

            <div className="col-md-7">
              <div className="card-body d-flex flex-column h-100 p-4">
                <h2 className="card-title fw-bold mb-3 border-bottom pb-2">
                  Pizza {pizza.name}
                </h2>

                <p className="card-text text-muted mb-4 fs-6">{pizza.desc}</p>

                <div className="mb-4">
                  <p className="fw-bold mb-2 fs-5">Ingredientes:</p>
                  <ul className="list-group ms-3">
                    {pizza.ingredients?.map((ingredient, index) => (
                      <li key={index} className=" text-muted mb-1 fs-6">
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Precio y Botón (Empujados al fondo con mt-auto) */}
                <div className="mt-auto d-flex justify-content-between align-items-center border-top pt-3">
                  <h3 className="fw-bold mb-0">
                    Precio: ${pizza.price?.toLocaleString("es-CL")}
                  </h3>
                  <button
                    type="button"
                    className="btn btn-dark btn-lg"
                    onClick={() => agregarCarrito(pizza)}
                  >
                    <i className="fa-solid fa-cart-shopping"></i> Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
