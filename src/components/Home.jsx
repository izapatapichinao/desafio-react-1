import React, { useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../assets/js/pizzas";

export default function Home() {
  const [arrayPizzas, setPizzas] = useState([pizzas]);

  return (
    <>
      <Header />
      <div className="row p-5">
        {pizzas.map((pizza, index) => (
          <CardPizza
            key={index}
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
