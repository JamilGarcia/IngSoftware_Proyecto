import db from "../../"

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
            console.log("Hola");
            const body = {login_Email: email, login_Password: password}; //Recordatorio de cambiar este code
            // const respuesta = await fetch('postgres://bzjzotnjsnygmw:e4cfb1e16da83acb0decbbd18981219e12525b51a1001e3cb3837d8593ff5468@ec2-54-86-214-124.compute-1.amazonaws.com:5432/d8lodrec6ir4ed', {
            //     method: 'POST',
            //     headers: {"Content-Type": "application/json"},
            //     body: JSON.stringify(body)
            // }).then((respuesta) => respuesta.json()).catch((error) => {console.log(error)});
            const usuario = await db.query("SELECT * FROM users;");

            console.log("el usuario es:")
            console.log(usuario)
            
            const respuesta = {}
            if(respuesta.Posicion !== ''){
                window.localStorage.setItem("isLoggedIn", "true");
                setDatosUsuario({posicion_Usuario: respuesta.Posicion});
                setLoggedIn(true);
                //Redireccionar a base de respuesta de Rest API
                if(respuesta.Posicion === "Gerente"){
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

    const logoutUsuario = () => {
        //window.localStorage.removeItem();
    }

    const datosUsuario_Ingresado = {
        loginUsuario,
        logoutUsuario,
        loggedIn,
        datosUsuario
    }

    return(
        <AuthContext.Provider value={datosUsuario_Ingresado} >{children}</AuthContext.Provider>
    );
}

