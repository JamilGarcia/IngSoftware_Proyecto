import React, { useContext, useState } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs"; 
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
import { AuthContext } from "../Context/AuthContext";
import Ventanas from "../Pantallas/Ventanas";

const SideBarEjec = ({ isOpen, toggle }) => {

  const { datosUsuario } = useContext(AuthContext);

  const [subVentanaActual, setSubVentanaActual] = useState(0);

  const actualizarSubVentana = (subventana) =>{
    if(subventana === 7){
      //Facturación
      setSubVentanaActual(7);
    } else if(subventana === 8){
      //Cotización
      setSubVentanaActual(8);
    } else {
      setSubVentanaActual(0);
      alert("Ocurrio un error inesperado con la actualizar subventana");
    }
  }
  return (
    <div className="separaciones">
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="side-menu">
      <Nav vertical className="side-menu">
        <p className="tipoUsuario">Ejecutivo</p>
        <NavItem>
          <NavLink className = "Elementos"  onClick={() => actualizarSubVentana(7)}>
            <BsFillCartCheckFill/> Facturación
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos"  onClick={() => actualizarSubVentana(8)}>
            <BsFillChatLeftQuoteFill/> Cotización
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    </div>
    <div className="Sidebar_Ventanas">
        <Ventanas seleccionVentana={subVentanaActual}>Generar factura</Ventanas>
    </div>
  </div>
);
}

export default SideBarEjec;