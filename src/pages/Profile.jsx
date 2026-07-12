import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const { getProfile, logout } = useContext(UserContext);
  const [perfil, setPerfil] = useState(null);

  useEffect(() => {
    const cargarPerfil = async () => {
      const data = await getProfile();
      if (data) setPerfil(data);
    };
    cargarPerfil();
  }, []);
  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "400px", minHeight: "60vh" }}
    >
      <div className="card shadow-sm border-0 p-4 text-center">
        <div className="card-body">
          <div className="mb-4">
            <i className="fa-solid fa-circle-user fa-5x text-secondary"></i>
          </div>

          <h2 className="card-title fw-bold mb-4">Perfil</h2>

          <p className="card-text text-muted fs-5 mb-5">
            <strong>Email:</strong> {perfil?.email || "Cargando..."}
          </p>

          <button onClick={logout} className="btn btn-outline-danger fw-bold">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  );
}
