import React from "react";
import "./VentanaPerfil.css";
import LogoComunicarte from "./LogoComunicarte.png";
import avatar from "./avatar.png";
import { FaBirthdayCake } from "react-icons/fa";
import { FaAt } from "react-icons/fa";
import { FaStackExchange } from "react-icons/fa";
import { useEffect, useState } from "react";

export const VentanaPerfil = () => {
  const navigate = useNavigate();
  const { datosUsuario } = useContext(AuthContext);
  const datosObtenidos = {
    primer_nombre: "",
    segundo_nombre: "",
    apellidos: "",
    correo_user: "",
    fecha_de_nacimiento: "",
    fecha_de_inicio: "",
    puesto_empresa: "",
  };

  const [dataPerfilUsuario, setDataPerfilUsuario] = useState(datosObtenidos);

  const obtenerDatos = async () => {
    const { correo } = datosUsuario;
    console.log(correo);
    const body = { correo: correo };
    console.log(body);
    try {
      const respuesta = await fetch(
        "https://comunicartewebapp-api.herokuapp.com/perfil_usuario",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
        .then((respuesta) => respuesta.json())
        .then((data) => {
          setDataPerfilUsuario({
            primer_nombre: data.primer_nombre,
            segundo_nombre: data.segundo_nombre,
            apellidos: data.apellidos,
            correo_user: data.correo,
            fecha_de_nacimiento: data.fecha_de_nacimiento,
            fecha_de_inicio: data.fecha_de_inicio,
            puesto_empresa: data.puesto_empresa,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.onbeforeunload = obtenerDatos();
  }, []);
  return (
    <div className="fondo-pantalla">
      <div class="caja-perfil">
        <div className="top">
          <img
            src={LogoComunicarte}
            className="Comunicarte-logo"
            alt="LogoComunicarte"
          />

          <img src={avatar} className="Avatar-logo" alt="Avatar" />
          <h3>
            <input
              className="forms"
              name="pnombre"
              value={dataPerfilUsuario.primer_nombre}
            />
            <input
              className="forms"
              name="snombre"
              value={dataPerfilUsuario.segundo_nombre}
            />
            <input
              className="forms"
              name="papellido"
              value={dataPerfilUsuario.apellidos}
            />
          </h3>
          <h3>
            {" "}
            <input
              className="forms"
              name="empresa"
              value={dataPerfilUsuario.puesto_empresa}
            />{" "}
          </h3>
        </div>

        <div className="datosPerfil">
          <p classname="fechanac">
            <FaBirthdayCake />
            <input
              className="forms"
              name="fechaNacimiento"
              value={dataPerfilUsuario.fecha_de_nacimiento}
            />
          </p>

          <p classname="correo">
            <FaAt />
            <input
              className="forms"
              name="correo"
              value={dataPerfilUsuario.correo_user}
            />
          </p>
        </div>
        <p classname="fechaini">
          <FaStackExchange />
          <input
            className="forms"
            name="fechaIngreso"
            value={dataPerfilUsuario.fecha_de_inicio}
          />
        </p>
        <div className="botones">
          <button className="boton">Volver</button>
          <button className="boton">Editar Perfil</button>
        </div>
      </div>
    </div>
  );
};
