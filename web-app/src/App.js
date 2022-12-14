import { Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import React from 'react';
import Home_Gerente from './Componentes/Pantallas/VentanasGerente/GerenteScreen';
import LoginScreen from './Componentes/Pantallas/LoginScreen';
import { AuthProvider } from './Componentes/Context/AuthContext';
import {ProtectedRoute} from './Componentes/Context/ProtectedRoute';
import { useEffect, useState } from 'react';
import  VentanaModificacion  from './Componentes/Pantallas/VentanaModificacion';
import VerPerfil from './Componentes/Pantallas/VerPerfilScreen';
import FlujoEfectivo from './Componentes/Pantallas/VentanasGerente/FlujoEfectivo';
import GenerarFactura from './Componentes/Pantallas/VentanasGerente/GenerarFactura';
import GestionPerfiles from './Componentes/Pantallas/VentanasGerente/GestionPerfiles';
import RegistroActivosFijos from './Componentes/Pantallas/VentanasGerente/RegistroActivosFijos';
import SubgerenteScreen from './Componentes/Pantallas/VentanasSubGerente/SubgerenteScreen';
import GestionarPerfilSubG from './Componentes/Pantallas/VentanasSubGerente/GestionPerfilSubG';
import RegistrarFacturasSubG from './Componentes/Pantallas/VentanasSubGerente/RegistrarFacturasSubG';
import RegistroActivosFijos_SubG from './Componentes/Pantallas/VentanasSubGerente/RegistroActivosFijos_SubG';
import EjecutivoScreen from './Componentes/Pantallas/VentanasEjecutivo/EjecutivoScreen';
import Facturacion from './Componentes/Pantallas/VentanasEjecutivo/Facturacion';
import Cotizacion from './Componentes/Pantallas/VentanasEjecutivo/Cotizacion';

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
        <React.Fragment>
            <section>
            <Routes>
                <Route path="/" element={
                isLoggedIn ? <Navigate to={`\\ ${posicion_Usuario}`} /> : <LoginScreen />} />
                <Route element = {<ProtectedRoute />} >
                <Route path = "/Gerente" element ={<Home_Gerente/>} >
                    <Route path = "generar_factura" element={<GenerarFactura/>} /> 
                    <Route path = "flujo_efectivo" element={<FlujoEfectivo />} /> 
                    <Route path = "gestion_perfiles" element={<GestionPerfiles/>} /> 
                    <Route path = "registro_activos_fijos" element={<RegistroActivosFijos />} />
                    <Route path = "/Gerente/descripcion_tabla_flujo_efectivo" element={<DescripcionTablaFlujoEfectivo/>} />  
                </Route>
                <Route path = "/Subgerente" element = {<SubgerenteScreen />} >
                    <Route path = "registrar_facturas" element={<RegistrarFacturasSubG/>} /> 
                    <Route path = "registro_activos_fijos" element={<RegistroActivosFijos_SubG />} /> 
                    <Route path = "gestion_perfiles" element={<GestionarPerfilSubG />} /> 
                </Route>
                <Route path = "/Ejecutivo_cuenta" element = {<EjecutivoScreen/>} >
                    <Route path = "facturacion" element={<Facturacion />} /> 
                    <Route path = "cotizacion" element={<Cotizacion />} /> 
                </Route>
                <Route path ="/perfil_usuario" element={<VerPerfil/>}/>
                <Route path = "/modificar_perfil" element={<VentanaModificacion/>} /> 
                </Route>
                </Routes>
            </section>
                
          
        </React.Fragment>
        </AuthProvider>
        
    );
  }

export default App;