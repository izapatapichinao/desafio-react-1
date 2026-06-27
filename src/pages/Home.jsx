import React, { useState, useContext } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { PizzaContext } from "../context/PizzaProvider";

export default function Home() {
  const { pizzas } = useContext(PizzaContext);

  return (
    <>
      <Header />
      <div className="row p-5">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            desc={pizza.desc}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        ))}
      </div>
    </>
  );
}
