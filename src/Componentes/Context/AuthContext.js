import React, { createContext, useState, useEffect} from "react";
import { useNavigate} from 'react-router-dom';

export const AuthContext= createContext(null);

//Creacion de provider
const initialDatosUser = {
    correo_usuario: "",
    posicion_Usuario: ""
}
export const AuthProvider = ({children}) => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [datosUsuario, setDatosUsuario] = useState(initialDatosUser);
    const navigate = useNavigate();

    const loginUsuario = async (email, password) => {

        setDatosUsuario({correo_usuario: email});
        /*Metodo para verificar usuario en la base de datos al hacer fetch */
        try {
            const body = {correo: email, password_usuario: password}; //Recordatorio de cambiar este code
            const respuesta = await fetch('https://comunicartewebapp-api.herokuapp.com/', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            }).then((respuesta) => respuesta.json()).then((data) => {
               
                if(data.Posicion!== ''){
                    //window.localStorage.setItem("isLoggedIn", "true");
                    setDatosUsuario({posicion_Usuario: data.Posicion});
                    setLoggedIn(current => !current);
                    window.localStorage.setItem("isLoggedIn", true);
                    //Posicion usuario,
                    //Redireccionar a base de data de Rest API
                    if(data.Posicion === "Gerente"){
                        navigate('/gerente');
                    } else if(data.Posicion === "Subgerente"){
                        navigate('/subgerente');
                    } else {
                        //Es ejecutivo de cuenta
                        navigate('/ejecutivo_cuenta');
                    }
                }else {
                    console.log("El usuario no es valido.")
                }
            }).catch((error) => {console.log(error)});
            
        } catch (err) {
            console.error(err.message); 
        } 
    }

    const logoutUsuario = () => {
        //window.localStorage.removeItem();
        setLoggedIn(false);
        setDatosUsuario(initialDatosUser);
        navigate('/');
    }

    const datosUsuario_Ingresado = {
        loginUsuario,
        logoutUsuario,
        loggedIn,
        datosUsuario
    }

    useEffect(() => {
        console.log(loggedIn);
    }, [loggedIn]);

    return(
        <AuthContext.Provider value={datosUsuario_Ingresado} >{children}</AuthContext.Provider>
    );
}

