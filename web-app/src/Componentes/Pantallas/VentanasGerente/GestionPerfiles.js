import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../Hojas-de-estilo/GestionPerfiles.css';

const GestionPerfiles = () => {

    const navigate = useNavigate();
    return (
    <React.Fragment>
      <section>
        <div className="contenedorBotones">
          <h2 className="title">Gestion de Perfiles de Empleados</h2>
          <button type="button" className="botonGestionarPerfiles" onClick={() =>navigate('/crear_empleado')}>Crear Empleado</button>
          <button type="button" className="botonGestionarPerfiles">Modificar Empleado</button>
          <button type="button" className="botonGestionarPerfiles">Eliminar Empleado</button>
        </div>
      </section>
    </React.Fragment>  
  );
  }
  
  export default GestionPerfiles;