import { Route, Routes} from 'react-router-dom';
import Home_Gerente from './Componentes/Pantallas/GerenteScreen';
import LoginScreen from './Componentes/Pantallas/LoginScreen';
import Home_Subgerente from './Componentes/Pantallas/SubgerenteScreen'
import { AuthProvider } from './Componentes/Context/AuthContext';
import {ProtectedRoute} from './Componentes/Context/ProtectedRoute';
import VerPerfil from './Componentes/Ventanas/VerPerfil';

function App() {
    
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<LoginScreen />}/>
                    <Route element = {<ProtectedRoute />} >
                        <Route path = "/gerente" element ={<Home_Gerente/>}/>
                        <Route path = "/verperfil" element ={<VerPerfil/>}/>
                        <Route path="generar_factura"/>
                        <Route path = "flujo_efectivo" />
                    {/*<Route path = "/generar_factura" element={<Home_Gerente/>}/>
                    <Route path = "/flujo_efectivo"/>
                    <Route path = "/gestion_perfiles"/>
    <Route path = "/registro_activos_flujos"/>*/}
                    </Route>
            </Routes>
        </AuthProvider>
    );
  }

export default App;