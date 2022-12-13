import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import Home_Gerente from './Componentes/Pantallas/GerenteScreen';
import LoginScreen from './Componentes/Pantallas/LoginScreen';
import { AuthProvider } from './Componentes/Context/AuthContext';
import {ProtectedRoute} from './Componentes/Context/ProtectedRoute';
import { useEffect, useState } from 'react';
import  VentanaModificacion  from './Componentes/Pantallas/VentanaModificacion';
import VerPerfil from './Componentes/Pantallas/VerPerfilScreen';
import Home_Subgerente from './Componentes/Pantallas/Home_Subgerente';
import Home_EjecutivoC from './Componentes/Pantallas/Home_EjecutivoC';
import FlujoEfectivo from './Componentes/Pantallas/VentanasGerente/FlujoEfectivo';
import GenerarFactura from './Componentes/Pantallas/VentanasGerente/GenerarFactura';
import GestionPerfiles from './Componentes/Pantallas/VentanasGerente/GestionPerfiles';
import RegistroActivosFijos from './Componentes/Pantallas/VentanasGerente/RegistroActivosFijos';

function App() {

    const navigate = useNavigate();
    const [posicion_Usuario,setPosicionUsuario] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect (() => {
        setPosicionUsuario(localStorage.getItem("puestoEmpresa"));
        const temp = localStorage.getItem("isLoggedIn");
        if(temp === true){
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        window.onbeforeunload = function() {
            if(isLoggedIn){
                navigate(` \\ ${posicion_Usuario}`);
            }
            return true;
        };
    },[]);
    return (
        <AuthProvider>
            <Routes>
            <Route path="/" element={
            isLoggedIn ? <Navigate to={`\\ ${posicion_Usuario}`} /> : <LoginScreen />} />
            <Route element = {<ProtectedRoute />} >
                <Route path = "/Gerente" element ={<Home_Gerente/>}>
                    <Route path="generar_factura" element= {<FlujoEfectivo />}/>
                    <Route path = "flujo_efectivo" element = {<GenerarFactura />}/>
                    <Route path = "gestion_perfiles" element = {<GestionPerfiles />}/>
                    <Route path = "registro_activos_fijos" element = {<RegistroActivosFijos />}/>
                </Route>
                <Route path = "/Subgerente" element = {<Home_Subgerente />} />
                <Route path = "/Ejecutivo_cuenta" element = {<Home_EjecutivoC/>} />
                <Route path ="/perfil_usuario" element={<VerPerfil/>}/>
                <Route path = "/modificar_perfil" element={<VentanaModificacion/>} /> 
            </Route>
            </Routes>
        </AuthProvider>
    );
  }

export default App;