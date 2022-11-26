import './Hojas-de-estilo/bootstrap.min.css'
import './Hojas-de-estilo/Navbar-With-Button-icons.css'
import './Hojas-de-estilo/styles.css'
import './App.css';
import { Route, Routes, Navigate, Outlet} from 'react-router-dom';
import Home_Gerente from './Componentes/GerenteScreen';
import LoginScreen from './Componentes/LoginScreen';
import Home_Subgerente from './Componentes/SubgerenteScreen'

function App() {
    return (
        <Routes>
        <Route path="/" element={<LoginScreen />}/>
            <Route path="/gerente" element={<Home_Gerente/>} />
            <Route path="/subgerente" element={<Home_Subgerente />}/>
            {/* <Route path="/ejecutivo_cuenta" element = {<EjecutivoC/>}/> */}
        </Routes>
    );
  }

export default App