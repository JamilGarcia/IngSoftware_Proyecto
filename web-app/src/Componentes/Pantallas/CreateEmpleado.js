import React, { useState , useEffect } from "react";
import { useNavigate } from "react-router-dom";
import  '../../Hojas-de-estilo/CreateEmpleado.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateEmpleado = () => {
    const [selectedDate , setSelectedDate] = useState(null);
    const [selectedDate2 , setSelectedDate2] = useState(null);
    const [isSubmit ,setisSubmit ] = useState(false);
    const navigate = useNavigate();    
    const [formErros,setFormErros] = useState({});
    const [nuevoEmpleado, setNuevoEmpleado] = useState({
        primer_nombre:"",
        segundo_nombre: "",
        apellidos: "",
        correo: "",
        fecha_de_nacimiento: "",
        fecha_de_inicio: "",
        puesto_empresa: "",
        password_usuario: "",
        estado: "activo"
    });

    const handleChange = (e) => {
        setNuevoEmpleado({...nuevoEmpleado, [e.target.name]: e.target.value});
    };
    const handleChangeDate = ()  => {
        if(selectedDate != null && selectedDate2 != null){
           
            const fecha_temp = new Date(selectedDate.toString());
            let dateFormated = fecha_temp.getFullYear() +"-" +fecha_temp.getMonth() +"-"+fecha_temp.getDay();
            //console.log("Hola" + dateFormated); 
            
            //console.log("Hola2");
            const fecha_temp2 = new Date(selectedDate2.toString());
            let dateFormated2 = fecha_temp2.getFullYear() +"-" +fecha_temp2.getMonth() +"-"+fecha_temp2.getDay();
            setNuevoEmpleado({...nuevoEmpleado,fecha_de_nacimiento:dateFormated,fecha_de_inicio:dateFormated2});
        }
    };

    
    const manejarIngresoDatos = async(e) => {
       
        e.preventDefault();
        handleChangeDate();
        setFormErros(validate(formErros));
      
        if(Object.keys(formErros).length === 0){
            setisSubmit(true);

            ingresoUsuarioExitoso();
        }
    }
    

    const ingresoUsuarioExitoso= async() => {
        //Limpiar campos y redireccionar a ventana anterior
        //navigate(-1);//Esto devuelve al ultimo elemento en la stack
        
        const body = nuevoEmpleado;
        console.log(body);
        const respuesta = await fetch('https://comunicartewebapp-api.herokuapp.com/crear_empleado', {
             method: 'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(body)
         }).then((respuesta) => respuesta.json()).then((data)=>{ 
            if(data.status === "success"){
                console.log("Siu");
             }else{
                alert("Ocurrio un error al crear un nuevo empleado");
                console.log("nel");
             }
         });
         
        
    };
    const ingresoUsuario_no_Exitoso=() => {
        //Limpiar campos y redireccionar a ventana anterior
      
        console.log("nopololo");
    };
    
    const validate = (values) =>{
        const erros = {}
        const rgex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!nuevoEmpleado.primer_nombre){
            erros.primer_nombre = "Ingrese primer nombre";
            
        }
        
        if(!nuevoEmpleado.apellidos){
            erros.apellidos = "Ingrese apellidos";
            
        }

        if(!nuevoEmpleado.correo){
            erros.correo = "Ingrese correo";
            
        }else{
            if(!rgex.test(nuevoEmpleado.correo)){
                erros.correo = "Este no es un correo valido.";
                
            }   
        }
        if(!nuevoEmpleado.password_usuario){
            erros.password_usuario = "Ingrese Contraseña";
           
        }
        if(!selectedDate){
            erros.fecha_de_nacimiento = "Selecione la fecha";
            
        }
        if(!selectedDate2){
            erros.fecha_de_inicio = "Selecione la fecha";
            
        }
        if(nuevoEmpleado.puesto_empresa == true){
            erros.puesto_empresa = "Selecione un puesto";
            
        }
        if(!nuevoEmpleado.puesto_empresa ){
            erros.puesto_empresa = "Selecione un puesto";
           
        }
        return erros;
    }
    return (
        <div className="fondo-pantalla">                        
            {/* {Object.keys(formErros).length === 0 && isSubmit ? (ingresoUsuarioExitoso()) : (ingresoUsuario_no_Exitoso())} */}
            <h1 className = "Titulo"><bl>Creación De Perfil De Usuario</bl></h1>
            <div className="CuadroCentrado">
                <div className="seccion_1">
                    <form onSubmit={ manejarIngresoDatos} className="row g-3" >
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label for="" className="form-label">Primer Nombre</label>
                            <input
                                type="text"
                                placeholder=""
                                className="form-control"
                                name="primer_nombre"
                                id=""
                                onChange={e => handleChange(e)}
                            />
                            <p className="mensaje_error">{formErros.primer_nombre}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label for="" class="form-label">Segundo Nombre</label>
                            <input
                                type="text"
                                placeholder=""
                                class="form-control"
                                name="segundo_nombre"
                                id=""
                                onChange={e => handleChange(e)}
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label for="" className="form-label">Apellidos</label>
                            <input
                                type="text"
                                placeholder=""
                                className="form-control"
                                name="apellidos"
                                id=""
                                onChange={e => handleChange(e)}
                            />
                            <p className="mensaje_error">{formErros.apellidos}</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 '>
                            <label  className="form-label DateLabel">Fecha de Inicio</label>
                            <DatePicker name="fecha_de_inicio" className='DateChosser' selected={selectedDate2} dateFormat={"yyyy-MM-dd"} onChange={ date => setSelectedDate2(date) }  />
                            <p className="mensaje_error">{formErros.fecha_de_inicio}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label for="" className="form-label">Correo</label>
                            <input
                                type="text"
                                placeholder=""
                                className="form-control"
                                name="correo"
                                id=""
                                onChange={e => handleChange(e)}
                            />
                             <p className="mensaje_error">{formErros.correo}</p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label for="" className="form-label">Contraseña</label>
                            <input
                                type="text"
                                placeholder=""
                                className="form-control"
                                name="password_usuario"
                                id=""
                                onChange={e => handleChange(e)}
                            />
                             <p className="mensaje_error">{formErros.password_usuario}</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 '>
                            <label  className="form-label DateLabel">Fecha de Nacimiento</label>
                            <DatePicker name="a" className='DateChosser' selected={selectedDate} dateFormat={"yyyy-MM-dd"} onChange={ date => setSelectedDate(date) }  />
                            <p className="mensaje_error">{formErros.fecha_de_nacimiento}</p>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 '>
                            <label  className="form-label DateLabel">Tipo de Cuenta</label>    
                            <select name = "puesto_empresa" class='form-select' id = 'tipo_Cuenta' required onChange={e => handleChange(e)}>
                                <option value> -- --- --</option>
                                <option >Gerente</option>
                                <option>Subgerente</option>
                                <option>Ejecutivo_Cuenta</option>
                            </select>
                            <p className="mensaje_error">{formErros.puesto_empresa}</p>
                        </div>
                        
                       
                        
                    </form>      
                </div>
                <div className="seccion_2">
                            <img className= "Foto" src="/images/avatar.png" />
                            <div className="col-12">
                                    <button type="submit" className='btn btn-outline-secondary Hola' >Selecionar foto</button>
                                </div>
                                <div className="col-12">
                            <button type="submit" className='btn btn-outline-secondary Hola' onClick={ manejarIngresoDatos}>Crear</button>
                        </div>
                        </div>
            </div>
            <div className="Regresar">
                <button type="submit" className='btn btn-outline-secondary Hola' onClick={() =>navigate(-1)} >Regresar</button>
            </div>
                   
        </div>
    );

}

export default CreateEmpleado;