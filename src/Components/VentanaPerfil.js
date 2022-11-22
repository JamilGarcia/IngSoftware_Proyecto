import React from "react";
import logo from "./logo.svg";
import "./VentanaPerfil.css";
import LogoComunicarte from "./LogoComunicarte.png";
import { FaBirthdayCake } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { Link } from "react-router-dom";

export const VentanaPerfil = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={LogoComunicarte}
          className="Comunicarte-logo"
          alt="LogoComunicarte"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <div className="name">Paco Armando Perez Garcia</div>
        <div className="puesto">Gerente</div>
      </header>

      <div className="footer">
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
        <Link to="/Modificacion" className="MoverModificacion">
          Modificar Datos
        </Link>
        </div>
    </div>
  );
};
