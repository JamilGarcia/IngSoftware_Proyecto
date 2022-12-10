import React from "react";
import "../../Hojas-de-estilo/VerPerfilScreen.css";
import { FaBirthdayCake } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const VerPerfil = () => {
  const navigate = useNavigate();

  return (
    <div className="fondo-pantalla-estadodecuenta">
      <div class="caja-estadodecuenta">
        <div className="botones">
          <button className="boton" onClick={() => navigate(-1)}>
            Volver
          </button>
          <button className="boton">Editar Perfil</button>
        </div>
      </div>
    </div>
  );
};

export default VerPerfil;
