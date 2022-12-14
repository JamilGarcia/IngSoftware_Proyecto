import React from "react";
import "../../Hojas-de-estilo/VentanaModificacion.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const VentanaModificacion = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  const { datosUsuario } = useContext(AuthContext);
  const datosObtenidos = {
    primer_nombre: "",
    segundo_nombre: "",
    apellidos: "",
    correo_user: "",
  };

  const [dataPerfilUsuario, setDataPerfilUsuario] = useState(datosObtenidos);
  const obtenerDatos = async () => {
    const { correo } = datosUsuario;
    const body = { correo: correo };
    console.log(body);
    // 'http://localhost:5000/modificar_perfil'
    try {
      const respuesta = await fetch(
        "https://comunicartewebapp-api.herokuapp.com/modificar_perfil",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      )
        .then((respuesta) => respuesta.json())
        .then((data) => {
          //Modificar data.fecha_de_nacimiento
          // y data.fecha_de_inicio antes de setear
          setDataPerfilUsuario({
            primer_nombre: data.primer_nombre,
            segundo_nombre: data.segundo_nombre,
            apellidos: data.apellidos,
            correo_user: data.correo,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.onbeforeunload = obtenerDatos();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      dataPerfilUsuario.primer_nombre.length == 0 ||
      dataPerfilUsuario.apellidos.length == 0 ||
      dataPerfilUsuario.correo_user.length == 0
    ) {
      setError(true);
    }
  };

  const handlePrimerNombre = (e) => {
    setDataPerfilUsuario({
      ...dataPerfilUsuario,
      primer_nombre: e.target.value,
    });
  };

  const handleSegundoNombre = (e) => {
    setDataPerfilUsuario({
      ...dataPerfilUsuario,
      segundo_nombre: e.target.value,
    });
  };

  const handleApellidos = (e) => {
    setDataPerfilUsuario({
      ...dataPerfilUsuario,
      apellidos: e.target.value,
    });
  };

  const handleCorreo = (e) => {
    setDataPerfilUsuario({
      ...dataPerfilUsuario,
      correo_user: e.target.value,
    });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const navigate = useNavigate();
  return (
    <div className="fondo-pantallaModificacion">
      <div class="caja-centro">
        <div className="top">
          <img
            src="/images/Logo_ComunicArte_Final.png"
            className="Comunicarte-logo"
            alt="LogoComunicarte"
          />
          <img src={image} className="Avatar-logo" alt="Avatar" />
        </div>

        <div>
          <input
            id="Selectfile"
            type="file"
            accept=".jpg,.jpeg,.png"
            style={{ display: "none" }}
            onChange={onImageChange}
          />
          <label
            htmlFor="Selectfile"
            style={{ cursor: "pointer" }}
            className="botonCambiarFoto"
          >
            Cambiar Foto
          </label>
        </div>

        <div className="InputsNombre">
          <div className="FirstName">
            <input
              id="inputnombre"
              placeholder={dataPerfilUsuario.primer_nombre}
              type="text"
              value={dataPerfilUsuario.primer_nombre}
              name="primer_nombre"
              onChange={handlePrimerNombre}
            />
          </div>

          <div className="SecondName">
            <input
              placeholder={dataPerfilUsuario.segundo_nombre}
              type="text"
              value={dataPerfilUsuario.segundo_nombre}
              name="segundo_nombre"
              onChange={handleSegundoNombre}
            />
          </div>
        </div>

        <div className="InputVaciosNombres">
          {error && dataPerfilUsuario.primer_nombre.length <= 0 ? (
            <label className="NombreVacioLabel">
              Nombre no puede estar vacio
            </label>
          ) : (
            ""
          )}
        </div>

        <div className="InputsApellido-Correo">
          <div className="Apellidos">
            <input
              placeholder={dataPerfilUsuario.apellidos}
              type="text"
              value={dataPerfilUsuario.apellidos}
              name="apellidos"
              onChange={handleApellidos}
            />
          </div>

          <div className="Correo">
            <input
              placeholder={dataPerfilUsuario.correo_user}
              type="text"
              value={dataPerfilUsuario.correo_user}
              name="correo"
              onChange={handleCorreo}
            />
          </div>
        </div>

        <div className="InputVaciosApellidosCorreo">
          
          {error && dataPerfilUsuario.apellidos.length <= 0 ? (
            <label className="ApellidosVacioLabel">
              Apellidos no puede estar vacio
            </label>
          ) : (
            ""
          )}
          
          
          {error && dataPerfilUsuario.correo_user.length <= 0 ? (
            <label className="CorreoVacioLabel">
              Correo no puede estar vacio
            </label>
          ) : (
            ""
          )}
          
        </div>

        <div className="botonesModificacion">
          <button className="botonModificacion" onClick={() => navigate(-1)}>
            Volver
          </button>
          <button onClick={handleSubmit} className="botonModificacion">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
export default VentanaModificacion;
