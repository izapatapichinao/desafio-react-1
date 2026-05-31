import React, { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion de campos obligatorios
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    // Validacion de password de al menos 6 caracteres
    if (password.length < 6) {
      alert("El password debe tener al menos 6 caracteres.");
      return;
    }

    // Validacion de password y confirmacion de password
    if (password !== confirmPassword) {
      alert("El password y la confirmación del password deben ser iguales.");
      return;
    }

    // Mensaje de exito
    alert("¡Registro exitoso!");

    // Limpiar campos al finalizar el registro
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="formContainer">
      <h2>Register</h2>
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
        <div className="inputContainer">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirma tu password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}
