import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(null);

  const login = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error en login:", error);
      return false;
    }
  };

  const register = async (emailInput, passwordInput) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        setEmail(data.email);
        localStorage.setItem("token", data.token); // Guardamos en localStorage[cite: 8]
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error en registro:", error);
      return false;
    }
  };
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
  };

  const getProfile = async () => {
    if (!token) return null;

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Enviamos el JWT en el header[cite: 7, 8]
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al obtener perfil:", error);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
