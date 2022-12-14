import '../../../Hojas-de-estilo/FlujoEfectivo.css';

const FlujoEfectivo = () => {

  return (
    <div className= "g_fe_fondo">
        <div className="g_fe_caja">
            <h2 className="h2">FLUJO EFECTIVO</h2>
            <div className='divColumnasFe'>
            <div>
            <p className="tituloMOD">PRIMER NOMBRE</p>
              <input type = "PrimerNombre" placeholder ="PrimerNombre" id="PrimerNombre" name="PrimerNombre" className="form-fe" />
              <p className="tituloMOD">SEGUNDO NOMBRE</p>
              <input type = "SegundoNombre" placeholder ="SegundoNombre" id="SegundoNombre" name="SegundoNombre" className="form-fe" />
              <p className="tituloMOD">CORREO</p>
              <input type = "Correo" placeholder ="Correo" id="Correo" name="Correo" className="form-fe" />
            </div>
            <div> 
            <p className="tituloMOD">PRIMER NOMBRE</p>
              <input type = "PrimerNombre" placeholder ="PrimerNombre" id="PrimerNombre" name="PrimerNombre" className="form-fe" />
              <p className="tituloMOD">SEGUNDO NOMBRE</p>
              <input type = "SegundoNombre" placeholder ="SegundoNombre" id="SegundoNombre" name="SegundoNombre" className="form-fe" />
              <p className="tituloMOD">CORREO</p>
              <input type = "Correo" placeholder ="Correo" id="Correo" name="Correo" className="form-fe" />
            </div>
            </div>
            
            
            <button className='botonFlujoEfectivo'>Summit</button>
        </div>
    </div>
);
}

export default FlujoEfectivo;