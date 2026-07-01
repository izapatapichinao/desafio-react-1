import CartProvider from "./context/CartProvider";
import { PizzaProvider } from "./context/PizzaProvider";
import UserProvider from "./context/UserContext";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PizzaProvider>
      <CartProvider>
        <UserProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </UserProvider>
      </CartProvider>
    </PizzaProvider>
  </StrictMode>,
);
