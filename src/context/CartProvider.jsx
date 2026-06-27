import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarCarrito = (pizza) => {
    const pizzaExiste = cart.findIndex((item) => item.id === pizza.id);
    if (pizzaExiste !== -1) {
      const actualizarCarrito = [...cart];
      actualizarCarrito[pizzaExiste].count += 1;
      setCart(actualizarCarrito);
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const aumentarCantidad = (id) => {
    const actualizarCarrito = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item,
    );
    setCart(actualizarCarrito);
  };

  const disminuirCantidad = (id) => {
    const actualizarCarrito = cart
      .map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      })
      .filter((item) => item.count > 0);

    setCart(actualizarCarrito);
  };

  const calcularTotal = cart.reduce(
    (acumulador, item) => acumulador + item.price * item.count,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarCarrito,
        aumentarCantidad,
        disminuirCantidad,
        calcularTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartProvider;
