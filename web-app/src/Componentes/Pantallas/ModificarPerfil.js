import "../../Hojas-de-estilo/ModificarPerfil.css";

const ModificarPerfil = () => {

    return (
        <div className= "fondo-pantallaMP">
        <div className="caja-Perfil">
            {/*<img src="/images/Logo_ComunicArte_Final.png" alt="Logo de la empresa ComunicArte"
            height="120"/>*/}
            <h2 className="h2">Modificar Perfil</h2>
            <form className="contenedor" >
                <div className="Forms">
                    <p className="tituloMOD">PRIMER NOMBRE</p>
                    <input type = "PrimerNombre" placeholder ="PrimerNombre"
                        id="PrimerNombre" name="PrimerNombre" className="form-Mod" />
                    <p className="tituloMOD">SEGUNDO NOMBRE</p>
                    <input type = "SegundoNombre" placeholder ="SegundoNombre"
                        id="SegundoNombre" name="SegundoNombre" className="form-Mod" />
                    <p className="tituloMOD">CORREO</p>
                    <input type = "Correo" placeholder ="Correo" 
                        id="Correo" name="Correo" className="form-Mod" />
                    <p className="tituloMOD">FECHA DE NACIMIENTO</p>
                    <input type = "FechaNacimiento" placeholder ="FechaNacimiento"
                        id="FechaNacimiento" name="FechaNacimiento" className="form-Mod" />
                    
                </div>
                <div className="Forms">
                    <p className="tituloMOD">PRIMER APELLIDO</p>
                    <input type = "PrimerApellido" placeholder ="PrimerApellido" id="PrimerApellido"
                        name="PrimerApellido" className="form-Mod" />
                    <p className="tituloMOD">SEGUNDO APELLIDO</p>
                    <input type = "SegundoApellido" placeholder ="SegundoApellido" id="SegundoApellido"
                        name="SegundoApellido" className="form-Mod" />
                    <p className="tituloMOD">CONTRASEÑA</p>
                    <input type = "Contrasenia" placeholder ="Contrasenia" id="Contrasenia"
                        name="Contrasenia" className="form-Mod" />
                    <button type="submit" className="boton">Guardar</button>
                </div>
                <div className="Forms">
                <img src="/images/Logo_ComunicArte_Final.png" alt="Logo de la empresa ComunicArte"
                    height="120"/>
                    <button type="submit" className="boton">Editar</button>
                </div>
            </form>
        </div>
    </div>
  );
  }
  
  export default ModificarPerfil;