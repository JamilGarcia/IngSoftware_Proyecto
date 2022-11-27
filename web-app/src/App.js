import './Hojas-de-estilo/bootstrap.min.css'
import './Hojas-de-estilo/Navbar-With-Button-icons.css'
import './Hojas-de-estilo/styles.css'
import { Route, Routes} from 'react-router-dom';
import Home_Gerente from './Componentes/GerenteScreen';
import LoginScreen from './Componentes/LoginScreen';
import Home_Subgerente from './Componentes/SubgerenteScreen'
import { AuthProvider } from './Componentes/Context/AuthContext';
import {ProtectedRoute} from './Componentes/Context/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <Routes>
            <Route path="/" element={<LoginScreen />}/>
                <Route element={<ProtectedRoute />}>
                    <Route path="/gerente" element={<Home_Gerente/>} />
                    <Route path="/subgerente" element={<Home_Subgerente />}/>
                </Route>
                {/* <Route path="/ejecutivo_cuenta" element = {<EjecutivoC/>}/> */}
            </Routes>
        </AuthProvider>
    );
  }

export default App