import foto from "./fotoPerfil.webp";
import TopBar from "../Topbar/Topbar";
import SideBar from "../sidebar/SideBar";

const VerPerfil = () => {
    return (
        <div>
        <TopBar/>
        <div className="fotoPerfil">
            <div className = "fotoNombre"> {/*Foto de perfil*/}
                <img src={foto} alt=""className="foto"/>
                <div className = "nomApe">
                <div className="nombrePerfil"> {/*Nombre de perfil*/}
                    <div className="textoPerfil"> {/*Primer nombre*/}
                        <label>Primer Nombre</label>
                        <form>
                            <input className="forms" name="pnombre" value="Primer Nombre"/>
                        </form>
                    </div>
                    <div className="textoPerfil">{/*Segundo nombre*/}
                        <label>Segundo Nombre</label>
                        <form>
                            <input className="forms" name="snombre" value="Segundo Nombre"/>
                        </form>    
                    </div>
                </div>
                <div className="nombrePerfil"> {/*Apellidos de perfil*/}
                    <div className="textoPerfil">{/*Primer apellido*/}
                        <label>Apellidos</label>
                        <form>
                            <input className="forms" name="papellido" value="Apellidos"/>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="infoPerfil"> {/*Información de perfil*/}
                
                <div className="textoPerfil">{/*Correo de perfil*/}
                    <label>Correo</label>
                    <form>
                        <input className="forms" name="correo" value="Correo"/>
                    </form>
                </div>
                <div className="FechasPerfil">{/*Fechas de perfil*/}
                    <div className="textoPerfil">{/*Fecha de nacimiento*/}
                        <label>Fecha de nacimiento</label>
                        <form>
                            <input className="forms" name="fechaNacimiento" value="Fecha de nacimiento"/>
                        </form>
                    </div>
                    <div className="textoPerfil">{/*Fecha de ingreso*/}
                        <label>Fecha de ingreso</label>
                        <form>
                            <input className="forms" name="fechaIngreso" value="Fecha de ingreso"/>
                        </form>
                    </div>
                </div>
                <div className="textoPerfil">{/*Empresa de perfil*/}
                    <label>Empresa</label>
                    <form>
                        <input className="forms" name="empresa" value="Empresa"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
    
}

export default VerPerfil;