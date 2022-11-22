import React from "react";
import "./VentModificacion.css";
import avatar from "./avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const VentModificacion = () => {
  const [Firstname, setFirstName] = useState("");
  const [Middlename, setMiddleName] = useState("");
  const [FirstLastname, setFirstLastName] = useState("");
  const [SecondLastname, setSecondLastName] = useState("");
  const [Correo, setCorreo] = useState("");
  const [FechaNacimiento, setFechaNacimiento] = useState("");

  return (
    <div className="App">
      <header className="App-header"></header>

      <div class="centered">
        <img src={avatar} className="avatar-logo" alt="avatar" />
        <button className="CambiarFoto">Cambiar Foto</button>
        <button className="GuardarCambios">Guardar cambios</button>

        <div className="FirstName">
          <form>
            <label>
              Primer Nombre:
              <input
                type="text"
                value={Firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </form>
        </div>

        <div className="MiddleName">
          <form>
            <label>
              Segundo Nombre:
              <input
                type="text"
                value={Middlename}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </label>
          </form>
        </div>

        <div className="FirstLastName">
          <form>
            <label>
              Primer Apellido:
              <input
                type="text"
                value={FirstLastname}
                onChange={(e) => setFirstLastName(e.target.value)}
              />
            </label>
          </form>
        </div>

        <div className="SecondLastName">
          <form>
            <label>
              Segundo Apellido:
              <input
                type="text"
                value={SecondLastname}
                onChange={(e) => setSecondLastName(e.target.value)}
              />
            </label>
          </form>
        </div>

        <div className="Correo">
          <form>
            <label>
              Correo:
              <input
                type="text"
                value={Correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </label>
          </form>
        </div>

        <div className="FechaNacimiento">
          <form>
            <label>
              Fecha de Nacimiento:
              <input
                type="text"
                required
                value={FechaNacimiento}
                onChange={(e) => setFechaNacimiento(e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>

      <div className="debajo">
        <Link to="/" className="MoverPerfil">
          Datos de Perfil
        </Link>
      </div>
    </div>
  );
};
