import React, {useState} from 'react';
import '../Hojas-de-estilo/LoginScreen.css'; 
import {AiOutlineMail} from 'react-icons/ai';
import {FaLock} from 'react-icons/fa';
import { useNavigate} from 'react-router-dom';


const LoginScreen = () => {
    //Destructuring de datos de entrada, correo y contraseña
    const [entradasLogin,setEntradasLogin] = useState({login_Email: '',login_Password: ''});
    const {login_Email, login_Password} = entradasLogin;
   
    const [formErrors, setFormErrors] = useState({errorEmail: '',errorPassword: ''});

    const [isSubmit, setIsSubmit] = useState(false);//Valor para verificar que se dio al boton ingresar
    const navigate = useNavigate();
    /*Metodo para manejar cambios en inputs de texto */
    const onChange = (e) => {
        setEntradasLogin({...entradasLogin, [e.target.name]: e.target.value});
    }

    /*Metodo para manejar datos de ingreso de sesión*/ 
    const manejarIngreso = (e) => {
        e.preventDefault();//Prevenir que recargue la pagina
        try {
            /*Actualizar errores */
            setFormErrors({...validarValor()});
            //Verificacion que no existan errores (verificacion de campos por bugs con errores)
            if( (formErrors.errorEmail === '' && formErrors.errorPassword === '')  &&
                (login_Email !== '' && login_Password !== '')){
                //Llamado a metodo que conecta con el back-end
                verificarUser();
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    const validarValor = () => {
        /*Metodo para validacion de entradas, validacion de campos vacios y correo por regex */
        const lista_errores = {errorEmail: '', errorPassword: ''}
        const regex_Correo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(login_Email.length === 0){
            lista_errores.errorEmail = "¡Se requiere ingresar una correo!";
        } else if(!regex_Correo.test(login_Email)){
            lista_errores.errorEmail = "Este no es un correo valido.";
        } else {
            lista_errores.errorEmail = '';
        }
        if(login_Password.length === 0)
            lista_errores.errorPassword = "¡Se requiere ingresar una contraseña!";
        else 
            lista_errores.errorPassword = '';
        return lista_errores;
    };
    
   // const navigate = useNavigate();

    const verificarUser = async () => {
        /*Metodo para verificar usuario en la base de datos al hacer fetch */
        try {
            const body = {login_Email, login_Password}; //Recordatorio de cambiar este code
            const respuesta = await fetch('http://localhost:5000', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then((respuesta) => respuesta.json()).catch((error) => {console.log(error)});
            if(respuesta.Posicion !== ''){
                setIsSubmit(true);
                //Redireccionar a base de respuesta de Rest API
                if(respuesta.Posicion=== "Gerente"){
                    navigate('/gerente');
                } else if(respuesta.Posicion === "Subgerente"){
                    navigate('/subgerente');
                } else {
                    //Es ejecutivo de cuenta
                    navigate('/ejecutivo_cuenta');
                }
            }else {
                console.log("El usuario no es valido.")
            }
            
        } catch (err) {
            console.error(err.message); 
        }
    }

  


    return (
        <div className= "fondo-pantalla">
            <div className="caja-Login">
                <img src="/images/Logo_ComunicArte_Final.png" alt="Logo de la empresa ComunicArte"
                height="120"/>
                <h2>Inicio de Sesión</h2>
                <form className="contenedor_datos" onSubmit={manejarIngreso}>
                    <div className="form-group">
                        <AiOutlineMail size={35} color="gray"/>
                        <input type = "email" placeholder ="Ingrese su correo" 
                            id="email_login" name="login_Email" className="form-control" 
                            value={login_Email} onChange={e => onChange(e)}/>
                    </div>
                    <p className="indicador_error">{formErrors.errorEmail}</p>
                    <div className ="form-group">
                        <FaLock size={35} color="gray"/>
                        <input type = "password" placeholder ="Ingrese su contraseña" id="password" 
                            name="login_Password" className="form-control" value={login_Password} onChange={e => onChange(e)}/>
                    </div>
                    <p className="indicador_error">{formErrors.errorPassword}</p>
                    <button type="submit" className="btn">Ingresar</button>
	            </form>
            </div>
        </div>
    );
}

export default LoginScreen;