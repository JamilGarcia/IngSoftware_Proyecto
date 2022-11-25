import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VentanaPerfil } from "./Components/VentanaPerfil";
import { VentModificacion } from "./Components/VentModificacion";

function App() {
  return (
    <Router>
      <Routes>
        {/* RUTAS DE LAS VENTANAS */}
        <Route path="/" element={<VentanaPerfil />} />
        <Route path="/Modificacion" element={<VentModificacion />} />
      </Routes>
    </Router>
  );
}

export default App;
