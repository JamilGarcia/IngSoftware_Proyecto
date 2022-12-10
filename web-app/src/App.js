import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Home_Gerente from "./Componentes/Pantallas/GerenteScreen";
import LoginScreen from "./Componentes/Pantallas/LoginScreen";
import { AuthProvider } from "./Componentes/Context/AuthContext";
import { ProtectedRoute } from "./Componentes/Context/ProtectedRoute";
import { useEffect, useState } from "react";
import VentanaModificacion from "./Componentes/Pantallas/VentanaModificacion";
import VerPerfil from "./Componentes/Pantallas/VerPerfilScreen";
import Home_Subgerente from "./Componentes/Pantallas/Home_Subgerente";
import Home_EjecutivoC from "./Componentes/Pantallas/Home_EjecutivoC";

function App() {
  const navigate = useNavigate();
  const [posicion_Usuario, setPosicionUsuario] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setPosicionUsuario(localStorage.getItem("puestoEmpresa"));
    const temp = localStorage.getItem("isLoggedIn");
    if (temp === true) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    window.onbeforeunload = function () {
      if (isLoggedIn) {
        navigate(`\ ${posicion_Usuario}`);
      }
      return true;
    };
  }, []);
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to={`\ ${posicion_Usuario}`} />
            ) : (
              <LoginScreen />
            )
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/Gerente" element={<Home_Gerente />}>
            <Route path="generar_factura" />
            <Route path="flujo_efectivo" />
            {/*<Route path = "/generar_factura" element={<Home_Gerente/>}/>
                    <Route path = "/flujo_efectivo"/>
                    <Route path = "/gestion_perfiles"/>
    <Route path = "/registro_activos_flujos"/>*/}
          </Route>
          <Route path="/Subgerente" element={<Home_Subgerente />} />
          <Route path="/Ejecutivo_cuenta" element={<Home_EjecutivoC />} />
          <Route path="/perfil_usuario" element={<VerPerfil />} />
          <Route path="/modificar_perfil" element={<VentanaModificacion />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
