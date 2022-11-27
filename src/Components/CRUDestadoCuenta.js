import React from "react";
import "./CRUDestadoCuenta.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LogoComunicarte from "./LogoComunicarte.png";

export const CRUDestadoCuenta = () => {
  {
    /* STATES PARA TEXTO Y HABILITAR/DESHABILITAR TEXTAREA */
  }
  const [Texto, setTexto] = useState("");
  const [disabled, setDisabled] = useState(true);

  {
    /* RESET TEXTAREA */
  }
  const resetTexto = () => {
    setTexto("");
  };

  {
    /* HABILITAR TEXTAREA */
  }
  function handleEnable() {
    setDisabled(false);
  }

  {
    /* DESHABILITAR TEXTAREA */
  }
  function handleDisable() {
    setDisabled(true);
  }

  return (
    <div className="EstadoCuenta">
      {/*RECTANGULO SUPERIOR ROSA*/}
      <header className="RectanguloSuperior"></header>

      {/*CUADRO CENTRADO DONDE VA TODA LA DATA*/}
      <div class="CuadroCentro">
        <div className="logo">
          <img
            src={LogoComunicarte}
            className="Comunicarte-logo"
            alt="LogoComunicarte"
          />{" "}
          <div />
        </div>
        <div>
          <label className="Titulo">Descripcion de item</label>
        </div>
        <textarea
          className="CuadrodeTexto"
          placeholder="Escriba descripcion del item aqui."
          type="text"
          disabled={disabled}
          value={Texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <div>
          {/* BOTONES */}
          <button onClick={handleEnable} className="BotonModificar">
            Modificar
          </button>
          <button onClick={handleDisable} className="BotonGuardar">
            Guardar
          </button>
          <button onClick={resetTexto} className="BotonEliminar">
            Eliminar
          </button>
        </div>
      </div>
      {/*RECTANGULO INFERIOR BLANCO*/}
      <div className="RectanguloInferior"></div>
    </div>
  );
};
