import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

export default function Home() {
  return (
    <>
      <Header />
      <div className="row p-5">
        <CardPizza name="Napolitana" price={5950} ingredients={["mozzarella", "tomates", "jamón", "orégano"]} img="../../src/assets/img/napolitana.jpg" />
        <CardPizza name="Española" price={6950} ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]} img="../../src/assets/img/espanola.jpg" />
        <CardPizza name="Pepperoni" price={6950} ingredients={["mozzarella", "pepperoni", "orégano"]} img="../../src/assets/img/pepperoni.jpg" />
      </div>
    </>
  );
}
