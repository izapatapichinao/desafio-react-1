import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import useInput from "../hooks/useInput";

export default function LoginForm() {
  const email = useInput("");
  const password = useInput("");

  const { login } = useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validacion de campos obligatorios
    if (!email.value.trim() || !password.value.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Validacion de password de al menos 6 caracteres
    if (password.value.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    const success = await login(email.value, password.value);
    if (success) {
      alert("Autenticación exitosa!");
    } else {
      alert("Datos incorrectos");
    }

    // Limpiar campos al finalizar el registro
    setEmail("");
    setPassword("");
  };

  return (
    <div className="formContainer">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingresa tu correo"
            {...email}
          />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu password"
            {...password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
