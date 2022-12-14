import React, { useContext, useState } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa"; 
import { FaCashRegister } from "react-icons/fa"; 
import { FaUserEdit } from "react-icons/fa"; 
import { AuthContext } from "../Context/AuthContext";
import Ventanas from "../Pantallas/Ventanas";

const SideBarSG = ({ isOpen, toggle }) => {

  const { datosUsuario } = useContext(AuthContext);

  const [subVentanaActual, setSubVentanaActual] = useState(0);

  const actualizarSubVentana = (subventana) =>{
    if(subventana === 4){
      //Registrar Facturas
      setSubVentanaActual(4);
    } else if(subventana === 5){
      //Registro de Activos Fijos
      setSubVentanaActual(5);
    } else if(subventana === 6){
      //Gestión de Perfil
      setSubVentanaActual(6);
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
        <p className="tipoUsuario">Subgerente</p>
        <NavItem>
          <NavLink className = "Elementos" onClick={() => actualizarSubVentana(4)}>
            <FaFileInvoiceDollar/> Registrar Facturas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" onClick={() => actualizarSubVentana(5)}>
            <FaCashRegister/> Registro de Activos Fijos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" onClick={() => actualizarSubVentana(6)}>
          <FaUserEdit></FaUserEdit> Gestión de Perfil
          </NavLink>
        </NavItem>
      </Nav>
    </div>
    </div>
    <div className="Sidebar_Ventanas">
        <Ventanas seleccionVentana={subVentanaActual}>Generar factura</Ventanas>
      </div>
  </div>

  )
}

export default SideBarSG;