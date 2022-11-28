import foto from "../Imagenes/fotoPerfil.webp";
import TopBar from "../Topbar/Topbar";
import '../../App.css';
import '../../Hojas-de-estilo/VerPerfilScreen.css';
import {useNavigate} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";

const VerPerfil = () => {

    const navigate = useNavigate();
    const {datosUsuario} = useContext(AuthContext);
    const datosObtenidos = {
        primer_nombre : "",
        segundo_nombre: "",
        apellidos: "",
        correo_user: "",
        fecha_de_nacimiento: "",
        fecha_de_inicio: "",
        puesto_empresa: ""
    }

    const [dataPerfilUsuario,setDataPerfilUsuario] = useState(datosObtenidos);

    const obtenerDatos = async() => {

        const {correo} = datosUsuario;
        console.log(correo);
        const body = {correo: correo};
        console.log(body);
        try {
            const respuesta = await fetch('https://comunicartewebapp-api.herokuapp.com/perfil_usuario', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then((respuesta) => respuesta.json()).then((data) => {
                setDataPerfilUsuario({
                    primer_nombre : data.primer_nombre,
                    segundo_nombre: data.segundo_nombre,
                    apellidos: data.apellidos,
                    correo_user: data.correo,
                    fecha_de_nacimiento: data.fecha_de_nacimiento,
                    fecha_de_inicio: data.fecha_de_inicio,
                    puesto_empresa: data.puesto_empresa
                });
            });
        } catch (error) {
            console.log(error);
        }
        

    }
    useEffect(()=> {
        window.onbeforeunload = obtenerDatos();
    },[]);

    return (
        <>
        <TopBar/>
        <div className="fotoPerfil">
            <div className = "fotoNombre"> {/*Foto de perfil*/}
                <img src={foto} alt=""className="foto"/>
                <div className = "nomApe">
                <div className="nombrePerfil"> {/*Nombre de perfil*/}
                    <div className="textoPerfil"> {/*Primer nombre*/}
                        <label>Primer Nombre</label>
                                <input className="forms" name="pnombre" value={dataPerfilUsuario.primer_nombre}/>

                    </div>
                    <div className="textoPerfil">{/*Segundo nombre*/}
                        <label>Segundo Nombre</label>
                                <input className="forms" name="snombre" value={dataPerfilUsuario.segundo_nombre}/>
    
                    </div>
                </div>
                <div className="nombrePerfil"> {/*Apellidos de perfil*/}
                    <div className="textoPerfil">{/*Primer apellido*/}
                        <label>Apellidos</label>
                                <input className="forms" name="papellido" value={dataPerfilUsuario.apellidos}/>

                    </div>
                </div>
                </div>
            </div>
            <div className="infoPerfil"> {/*Información de perfil*/}
                
                <div className="textoPerfil">{/*Correo de perfil*/}
                    <label>Correo</label>
                        <input className="forms" name="correo" value={dataPerfilUsuario.correo_user}/>
                </div>
                <div className="FechasPerfil">{/*Fechas de perfil*/}
                    <div className="textoPerfil">{/*Fecha de nacimiento*/}
                        <label>Fecha de nacimiento</label>
                                <input className="forms" name="fechaNacimiento" value={dataPerfilUsuario.fecha_de_nacimiento}/>

                    </div>
                    <div className="textoPerfil">{/*Fecha de ingreso*/}
                        <label>Fecha de ingreso</label>
                                <input className="forms" name="fechaIngreso" value={dataPerfilUsuario.fecha_de_inicio}/>

                    </div>
                </div>
                <div className="textoPerfil">{/*Empresa de perfil*/}
                    <label>Empresa</label>
                        <input className="forms" name="empresa" value={dataPerfilUsuario.puesto_empresa}/>
                </div>
            </div>
        </div>
        <button className = "btn" onClick={() => navigate(-1)}>Volver</button>
        </>
    );
}

export default VerPerfil;