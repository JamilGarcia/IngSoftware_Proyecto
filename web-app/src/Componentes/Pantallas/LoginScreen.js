import React, {useState, useContext} from 'react';
import  '../../Hojas-de-estilo/LoginScreen.css'; 
import {AiOutlineMail} from 'react-icons/ai';
import {FaLock} from 'react-icons/fa';
import { AuthContext } from '../Context/AuthContext';

const LoginScreen = () => {
    //Destructuring de datos de entrada, correo y contraseña
    const [entradasLogin,setEntradasLogin] = useState({login_Email: '',login_Password: ''});
    const {login_Email, login_Password} = entradasLogin;
    const initialStateErrors = {
        errorEmail: "", errorPassword: ""
    }   
    const [formErrors, setFormErrors] = useState(initialStateErrors);
    const {loginUsuario} = useContext(AuthContext);

    const onChange = (e) => {/*Metodo para manejar cambios en inputs de texto */
        setEntradasLogin({...entradasLogin, [e.target.name]: e.target.value});
    }

    /*Metodo para manejar datos de ingreso de sesión*/ 
    const manejarIngreso = (e) => {
        e.preventDefault();//Prevenir que recargue la pagina
        try {
            let resultadoVal = validarValor();
                //Verificacion que no existan errores (verificacion de campos por bugs con errores)
                if(resultadoVal){
                    setFormErrors({errorEmail: "", errorPassword: ""});
                    loginUsuario(login_Email, login_Password);//Llamado a metodo que conecta con el back-end
                } 
        } catch (err) {
            console.error(err.message);
        }
    };
    
    const validarValor = () => {
        /*Metodo para validacion de entradas, validacion de campos vacios y correo por regex */
        const regex_Correo = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        let validacion = true;
        const lista_errores = {errorEmail: "", errorPassword: ""};
        if(login_Email.length === 0){
           
            validacion = false;
            lista_errores.errorEmail = "¡Se requiere ingresar una correo!";
        } else {

            if(!regex_Correo.test(login_Email)){
                validacion = false;
                lista_errores.errorEmail = "¡El formato del correo ingresado no es valido!";
            }
        }
        if(login_Password.length === 0){
            lista_errores.errorPassword = "¡Se requiere ingresar una contraseña!";
            validacion = false;
        }

        if(validacion){
            return true;
        } else {
            setFormErrors(lista_errores);
            return false;
        }
        //setFormErrors({...lista_errores})
    };

    return (
        <div className= "fondo-pantalla">
            <div className="caja-Login">
                <img src="/images/Logo_ComunicArte_Final.png" alt="Logo de la empresa ComunicArte"
                height="120"/>
                <h2>Inicio de Sesión</h2>
                <form className="contenedor_datos" onSubmit={manejarIngreso}>
                    <div className="form-group">
                        <AiOutlineMail size={35} color="gray"/>
                        <input type = "text" placeholder ="Ingrese su correo" 
                            id="email_login" name="login_Email" className="form-control" 
                            value={login_Email} onChange={e => onChange(e)}   
                        />
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