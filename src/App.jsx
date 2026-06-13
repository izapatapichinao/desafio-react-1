import "./App.css";
import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";
// import Home from "./components/Home";
// import RegisterForm from "./components/RegisterForm";
// import LoginForm from "./components/LoginForm";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
      {/* <Home /> */}
      {/* <Cart /> */}
      <Pizza />
      <Footer />
    </>
  );
}

export default App;
