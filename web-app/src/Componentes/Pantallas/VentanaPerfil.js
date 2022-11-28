import React, { useContext } from "react";
import "../../Hojas-de-estilo/VentanaPerfil.css";
import LogoComunicarte from "../Imagenes/Logo_ComunicArte_Final.png";
import { FaBirthdayCake } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

export const VentanaPerfil = () => {

  const [infoperfil, setInfoperfil] = useState([])
  const cargarInfoUsuario = async() =>{
    const response = await fetch('http://localhost:3000/')
    const data = await response.json()
    setInfoperfil(data)
  }

  useEffect(() => {
    cargarInfoUsuario()
  }, [])

  return (
    <div className="App">
      <header className="ParteSuperiorRosa">
        <img
          src={LogoComunicarte}
          className="Comunicarte-logo"
          alt="LogoComunicarte"
        />
        <img src={LogoComunicarte} className="App-logo" alt="logo" />
        <div className="name"></div>
        <div className="puesto">Gerente</div>
      </header>

      <div className="ParteInferiorBlanca">
        <p classname="fechanac">
          <FaBirthdayCake />
          Fecha de Nacimiento: 08/02/1993
        </p>
        <p classname="correo">
          <FaAt />
          pacoperez@comunicarte.hn
        </p>
        <p classname="fechaini">
          <FaStackExchange />
          Fecha de Inicio: 16/11/2022
        </p>
      </div>
      <div>
        {/*MOVERNOS A VENTANA DE MODIFICACION DE DATOS*/}
        <Link to="/Gerente" className="MoverModificacion">
          Volver
        </Link>
      </div>
    </div>
  );
};
