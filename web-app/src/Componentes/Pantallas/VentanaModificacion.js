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
      // "https://comunicartewebapp-api.herokuapp.com/modificar_perfil"
      try {
        const respuesta = await fetch(
         'http://localhost:5000/modificar_perfil',
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        ).then((respuesta) => respuesta.json()).then((data) => {
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
    },[]);
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (
    //     Firstname.length == 0 ||
    //     Lastnames.length == 0 ||
    //     Correo.length == 0 ||
    //     FechaNacimiento.length == 0
    //   ) {
    //     setError(true);
    //   }
    // };

    const handlePrimerNombre = (e) => {
      setDataPerfilUsuario({
        ...dataPerfilUsuario,
        primer_nombre: e.target.value})
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
            <img 
            src="/images/avatar.png"
            className="Avatar-logo" 
            alt="Avatar" 
            />
          </div>
          <button className="botonCambiarFoto">Cambiar Foto</button>
          <div className="InputsNombre">
            <div className="FirstName">
              <input
                placeholder={dataPerfilUsuario.primer_nombre}
                type="text"
                value={dataPerfilUsuario.primer_nombre}
                name= "primer_nombre"
                onChange={handlePrimerNombre}
              />
            </div>
  
            <div className="SecondName">
              <input
                placeholder={dataPerfilUsuario.segundo_nombre}
                type="text"
                value={Middlename}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
          </div>
  
          <div className="InputsApellido-Correo">
            <div className="Apellidos">
              <input
                placeholder={dataPerfilUsuario.primer_nombre}
                type="text"
                value={Lastnames}
                onChange={(e) => setLastNames(e.target.value)}
              />
            </div>
  
            <div className="Correo">
              <input
                placeholder={dataPerfilUsuario.primer_nombre}
                type="text"
                value={Correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>
          <div className="botonesModificacion">
            <button className="botonModificacion" onClick={() => navigate(-1)} >Volver</button>
            <button className="botonModificacion">Guardar Cambios</button>
          </div>
        </div>
      </div> 
    );
};
export default VentanaModificacion;