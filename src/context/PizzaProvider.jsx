import { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
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
    <PizzaContext.Provider value={{ pizzas }}>{children}</PizzaContext.Provider>
  );
};
