import React from "react";
import { Link } from "react-router";

export default function CardPizza({
  desc,
  name,
  price,
  ingredients = [],
  img,
}) {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 my-4">
        <div className="card w-100 h-100">
          <img src={img} className="card-img-top pizza-img" alt={name} />
          <div className="card-body">
            <h4 className="card-title text-capitalize fw-bold mb-0">
              Pizza {name}
            </h4>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item text-center">
              <p className="card-text text-muted fs-6 fw-light mb-0">{desc}</p>
            </li>
            <li className="list-group-item text-center">
              <p className="text-muted fs-5 fw-bold mb-1 fs-6">
                Ingredientes:{" "}
              </p>
              {/* Iteracion de Ingredientes */}
              <ul className="list-group list-group-flush">
                {ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="text-muted text-center fs-6 list-group-item"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </li>
            <li className="list-group-item text-center pb-3">
              <h5 className="fw-bold fs-4 mb-3">
                Precio: ${price.toLocaleString("es-CL")}
              </h5>
              <div className="d-flex justify-content-around">
                <Link to={`/pizza/p001`}>
                  <button type="button" className="btn btn-outline-dark btn-sm">
                    Ver Más
                  </button>
                </Link>
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
