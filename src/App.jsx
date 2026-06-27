import "./App.css";
import { Routes, Route } from "react-router";
import CartProvider from "./context/CartProvider";
import { PizzaProvider } from "./context/PizzaProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <PizzaProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/p001" element={<Pizza />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </PizzaProvider>
    </>
  );
}

export default App;
