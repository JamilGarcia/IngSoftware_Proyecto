import React from "react";
import  '../../Hojas-de-estilo/VentanaModificacion.css';
import {useNavigate} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const VentanaModificacion = () => {
    {
      /*STATES PARA GUARDAR LA INFO ESCRITA EN LOS TEXT BOX*/
    }
    const [Firstname, setFirstName] = useState("");
    const [Middlename, setMiddleName] = useState("");
    const [Lastnames, setLastNames] = useState("");
    const [Correo, setCorreo] = useState("");
    const [FechaNacimiento, setFechaNacimiento] = useState("");
    const [error, setError] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (
        Firstname.length == 0 ||
        Lastnames.length == 0 ||
        Correo.length == 0 ||
        FechaNacimiento.length == 0
      ) {
        setError(true);
      }
    };
  
    return (
      <div className="fondo-pantallaModificacion">
        <div class="caja-centro">
          <div className="top">
            <img
              src={LogoComunicarte}
              className="Comunicarte-logo"
              alt="LogoComunicarte"
            />
            <img 
            src={avatar} 
            className="Avatar-logo" 
            alt="Avatar" 
            />
          </div>
          <button className="botonCambiarFoto">Cambiar Foto</button>
          <div className="InputsNombre">
            <div className="FirstName">
              <input
                placeholder="Primer Nombre"
                type="text"
                value={Firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
  
            <div className="SecondName">
              <input
                placeholder="Segundo Nombre"
                type="text"
                value={Middlename}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
          </div>
  
          <div className="InputsApellido-Correo">
            <div className="Apellidos">
              <input
                placeholder="Apellidos"
                type="text"
                value={Lastnames}
                onChange={(e) => setLastNames(e.target.value)}
              />
            </div>
  
            <div className="Correo">
              <input
                placeholder="Correo"
                type="text"
                value={Correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>
          <div className="botonesModificacion">
            <button className="botonModificacion">Volver</button>
            <button className="botonModificacion">Guardar Cambios</button>
          </div>
        </div>
      </div> 
    );
};
export default VentanaModificacion;