import React, {useState, useEffect} from 'react';
import './Login_Ventana.css'; 
import {AiOutlineMail} from 'react-icons/ai';
import {FaLock} from 'react-icons/fa';

const LoginScreen = () => {

    const [userEmail_Login, setUserEmail_Login] = useState('');//Valor para correo de usuarios
    const [userPassword_Login, setUserPassword_Login] = useState('') //Valor para contraseña de usuarios
    const [formErrors, setFormErrors] = useState({});
    const [ingresoValido, setIngresoValido] = useState(false);

    /*Metodo para manejar datos de ingreso de sesión*/ 
    const manejarIngreso = (e) => {
        e.preventDefault();
        setFormErrors(validarValor(userEmail_Login, userPassword_Login));
        setIngresoValido(true);

    };

    const validarValor = (email, password) => {
        const lista_errores = {}
        console.log(email);
        //Expresion regular para validar correo
        const regex_Correo = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.length == 0){
            lista_errores.errorEmail = "Se requiere ingresar el correo!";
        }
        if(password.length == 0){
            lista_errores.errorPassword = "Se requiere ingresar el correo!";
        }

        return lista_errores;
    };

    useEffect(() => {
        if(Object.keys(formErrors.length == 0 && ingresoValido)){

        }
    },[formErrors])

    return (
        <div className= "fondo-pantalla">
            <div className="caja-Login">
                <img src="/images/Logo_ComunicArte_Final.png" alt="Logo de la empresa ComunicArte"
                height="120"/>
                <h2>Inicio de Sesión</h2>
                <pre>{JSON.stringify(userEmail_Login)}</pre>
                <pre>{JSON.stringify(userPassword_Login)}</pre>
                <form className="contenedor_datos" onSubmit={manejarIngreso}>
                    <div className="form-group">
                        <AiOutlineMail size={35} color="gray"/>
                        <input type = "email" placeholder ="Ingrese su correo" 
                            id="email_login" name="email_user_login" className="form-control" 
                            value={userEmail_Login} onChange={(e) => setUserEmail_Login(e.target.value)}/>
                    </div>
                    <div class ="form-group">
                        <FaLock size={35} color="gray"/>
                        <input type = "password" placeholder ="Ingrese su contraseña" id="password" 
                            name="password" className="form-control" value={userPassword_Login} onChange={(e) => setUserPassword_Login(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn">Ingresar</button>
	            </form>
            </div>
        </div>
    )
}

export default LoginScreen;