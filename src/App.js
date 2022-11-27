import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VentanaPerfil } from "./Components/VentanaPerfil";
import { VentModificacion } from "./Components/VentModificacion";
import { CRUDestadoCuenta } from "./Components/CRUDestadoCuenta";

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTAS DE LAS VENTANAS */}
        <Route path="/" element={<VentanaPerfil />} />
        <Route path="/Modificacion" element={<VentModificacion />} />
        <Route path="/estadoCuenta" element={<CRUDestadoCuenta />} />
      </Routes>
    </Router>
  );
}

export default App;
