import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion de campos obligatorios
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Validacion de password de al menos 6 caracteres
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    // Mensaje de exito
    alert("Autenticación exitosa!");

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputContainer">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingresa tu password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
