import React from "react";
import '../../../Hojas-de-estilo/Cotizacion.css';

const Cotizacion = () => {

    return (
      <React.Fragment>
        <section>
        <div className= "g_co_fondo">
        <div className="g_co_caja">
            <h2 className="h2">COTIZACION</h2>
            <div className='divColumnasCO'>
            <div>
            <p className="tituloMOD">PRIMER NOMBRE</p>
              <input type = "PrimerNombre" placeholder ="PrimerNombre" id="PrimerNombre" name="PrimerNombre" className="form-co" />
              <p className="tituloMOD">SEGUNDO NOMBRE</p>
              <input type = "SegundoNombre" placeholder ="SegundoNombre" id="SegundoNombre" name="SegundoNombre" className="form-co" />
              <p className="tituloMOD">CORREO</p>
              <input type = "Correo" placeholder ="Correo" id="Correo" name="Correo" className="form-co" />
            </div>
            <div> 
            <p className="tituloMOD">PRIMER NOMBRE</p>
              <input type = "PrimerNombre" placeholder ="PrimerNombre" id="PrimerNombre" name="PrimerNombre" className="form-co" />
              <p className="tituloMOD">SEGUNDO NOMBRE</p>
              <input type = "SegundoNombre" placeholder ="SegundoNombre" id="SegundoNombre" name="SegundoNombre" className="form-co" />
              <p className="tituloMOD">CORREO</p>
              <input type = "Correo" placeholder ="Correo" id="Correo" name="Correo" className="form-co" />
            </div>
            </div>
            <button className='botonCotizacion'>Summit</button>
        </div>
    </div>
        </section>
      </React.Fragment>
  );
  }
  
  export default Cotizacion;