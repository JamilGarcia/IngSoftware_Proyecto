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
            <p className="tituloMOD">CLIENTE</p>
              <input type = "CLIENTE" placeholder ="CLIENTE" id="CLIENTE" name="CLIENTE" className="form-co" />
              <p className="tituloMOD">TIPO DE SERVICIO</p>
              <input type = "TIPO DE SERVICIO" placeholder ="TIPO DE SERVICIO" id="TIPO DE SERVICIO" name="TIPO DE SERVICIO" className="form-co" />
              <p className="tituloMOD">NOMBRE DE SERVICIO</p>
              <input type = "NOMBRE DE SERVICIO" placeholder ="NOMBRE DE SERVICIO" id="NOMBRE DE SERVICIO" name="NOMBRE DE SERVICIO" className="form-co" />
            </div>
            <div> 
            <p className="tituloMOD">CANTIDAD</p>
              <input type = "CANTIDAD" placeholder ="CANTIDAD" id="CANTIDAD" name="CANTIDAD" className="form-co" />
              <p className="tituloMOD">DETALLE</p>
              <input type = "DETALLE" placeholder ="DETALLE" id="DETALLE" name="DETALLE" className="form-co" />
              <p className="tituloMOD">PRECIO UNITARIO</p>
              <input type = "PRECIO UNITARIO" placeholder ="PRECIO UNITARIO" id="PRECIO UNITARIO" name="PRECIO UNITARIO" className="form-co" />
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