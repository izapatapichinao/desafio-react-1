import React from "react";
import "../assets/css/CardPizza.css";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 my-4">
        <div className="card w-100 h-100">
          <img src={img} className="card-img-top pizza-img" alt={name} />
          <div className="card-body">
            <h4 className="card-title text-capitalize fw-bold mb-0">Pizza {name}</h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">
              <p className="text-muted fs-5 fw-bold mb-1 fs-6">Ingredientes: </p>
              <p className="mb-0 fs-6 fw-light">{ingredients.join(", ")}</p>
            </li>
            <li className="list-group-item text-center pb-3">
              <h5 className="fw-bold fs-4 mb-3">Precio: ${price.toLocaleString("es-CL")}</h5>
              <div className="d-flex justify-content-around">
                <button type="button" className="btn btn-outline-dark btn-sm">
                  Ver Más
                </button>
                <button type="button" className="btn btn-dark btn-sm">
                  <i className="fa-solid fa-cart-shopping"></i> Añadir
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
