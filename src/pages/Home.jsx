import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../assets/js/pizzas";

export default function Home() {
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <>
      <Header />
      <div className="row p-5">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
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
