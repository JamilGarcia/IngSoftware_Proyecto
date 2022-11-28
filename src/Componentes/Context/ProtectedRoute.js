import { useContext } from "react";
import {Navigate, Outlet} from "react-router-dom";
import { AuthContext } from "./AuthContext";

export const ProtectedRoute= () => {
    const {loggedIn, posicionEmpresaUsuario} = useContext(AuthContext);
    //Hacer validacion por usuario para que no pueda acceder a ventanas de otros usuarios
    //ej. Gerente no puede acceder a ventana subgerente/ejecutivoCuenta
    return <>{loggedIn ? <Outlet /> : <Navigate to ="/"/>}</>
  }
  