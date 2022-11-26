import React from "react";
import "./VentModificacion.css";
import avatar from "./avatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const VentModificacion = () => {
  {
    /*STATES PARA GUARDAR LA INFO ESCRITA EN LOS TEXT BOX*/
  }
  const [Firstname, setFirstName] = useState("");
  const [Middlename, setMiddleName] = useState("");
  const [FirstLastname, setFirstLastName] = useState("");
  const [SecondLastname, setSecondLastName] = useState("");
  const [Correo, setCorreo] = useState("");
  const [FechaNacimiento, setFechaNacimiento] = useState("");
  const [error, setError]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Firstname.length == 0 ||
      FirstLastname.length == 0 ||
      SecondLastname.length == 0 ||
      Correo.length == 0 ||
      FechaNacimiento.length == 0
    ) {
      setError(true);
    }
  };

  return (
    <div className="App">
      {/*RECTANGULO SUPERIOR ROSA*/}
      <header className="RectanguloSuperiorRosa"></header>

      {/*CUADRO CENTRADO DONDE VA TODA LA DATA*/}
      <div class="CuadroCentrado">
        <img src={avatar} className="avatar-logo" alt="avatar" />
        <button className="CambiarFoto">Cambiar Foto</button>
        

        <form onSubmit={handleSubmit}>
          <div className="FirstName">
            <form>
                <input
                  placeholder="Primer Nombre"
                  type="text"
                  value={Firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              
              {error && Firstname.length <= 0 ? (
                <label className="nameLabel">Nombre no puede estar vacio</label>
              ) : (
                ""
              )}
            </form>
          </div>

          <div className="MiddleName">
            <form>
              
                <input
                  placeholder="Segundo Nombre"
                  type="text"
                  value={Middlename}
                  onChange={(e) => setMiddleName(e.target.value)}
                />
              
            </form>
          </div>

          <div className="FirstLastName">
            <form>
                <input
                  placeholder="Primer Apellido"
                  type="text"
                  value={FirstLastname}
                  onChange={(e) => setFirstLastName(e.target.value)}
                />
              
              {error && FirstLastname.length <= 0 ? (
                <label className="firstLastNameLabel">Apellido no puede estar vacio</label>
              ) : (
                ""
              )}
            </form>
          </div>

          <div className="SecondLastName">
            <form>
                <input
                  placeholder="Segundo Apellido"
                  type="text"
                  value={SecondLastname}
                  onChange={(e) => setSecondLastName(e.target.value)}
                />
              
              {error && SecondLastname.length <= 0 ? (
                <label className="secondLastNameLabel">Apellido no puede estar vacio</label>
              ) : (
                ""
              )}
            </form>
          </div>

          <div className="Correo">
            <form>
                <input
                  placeholder="Correo Electronico"
                  type="text"
                  value={Correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              
              {error && Correo.length <= 0 ? (
                <label className="correoLabel">Correo no puede estar vacio</label>
              ) : (
                ""
              )}
            </form>
          </div>

          <div className="FechaNacimiento">
            <form>
                <input
                  placeholder="Fecha de Nacimiento"
                  type="text"
                  value={FechaNacimiento}
                  onChange={(e) => setFechaNacimiento(e.target.value)}
                />
              
              {error && FechaNacimiento.length <= 0 ? (
                <label className="fechaNacimientoLabel">Fecha Nacimiento no puede estar vacio</label>
              ) : (
                ""
              )}
            </form>
          </div>
          <button className="GuardarCambios">Guardar cambios</button>
        </form>
      </div>
      {/*RECTANGULO INFERIOR ROSA*/}
      <div className="RectanguloInferiorBlanco">
        {/*MOVERNOS A VENTANA DE DATOS DEL PERFIL*/}
        <Link to="/" className="MoverPerfil">
          Datos de Perfil
        </Link>
      </div>
    </div>
  );
};
