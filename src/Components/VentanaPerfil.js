import React from "react";
import "./VentanaPerfil.css";
import LogoComunicarte from "./LogoComunicarte.png";
import { FaBirthdayCake } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { Link } from "react-router-dom";

export const VentanaPerfil = () => {
  return (
    <div className="App">
      <header className="ParteSuperiorRosa">
        <img
          src={LogoComunicarte}
          className="Comunicarte-logo"
          alt="LogoComunicarte"
        />
        <img src={LogoComunicarte} className="App-logo" alt="logo" />
        <div className="name">Paco Armando Perez Garcia</div>
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
        <Link to="/Modificacion" className="MoverModificacion">
          Modificar Datos
        </Link>
      </div>
    </div>
  );
};
