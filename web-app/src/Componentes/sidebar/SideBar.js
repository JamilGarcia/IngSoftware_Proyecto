import React, { useContext, useState } from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext";
import Ventanas from "../Pantallas/Ventanas";
//import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => {
  const { datosUsuario } = useContext(AuthContext);

  const [subVentanaActual, setSubVentanaActual] = useState(0);

  const actualizarSubVentana = (subventana) =>{
    if(subventana === 0){
      //Generar factura
      setSubVentanaActual(0);
      console.log("Generar factura");
    } else if(subventana === 1){
      //Flujo de efectivo
      setSubVentanaActual(1);
    } else if(subventana === 2){
      //Gestion de perfiles
      setSubVentanaActual(2);
    } else if(subventana === 3){
      //Registro de Activos Fijos
      setSubVentanaActual(3);
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
            <p className="tipoUsuario">Gerente</p>
            <NavItem>
              <NavLink className="Elementos"  onClick={() => actualizarSubVentana(0)}>
                <FaFileInvoiceDollar /> Generar factura
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Elementos" onClick={() => actualizarSubVentana(1)}>
                <FaCashRegister /> Flujo de Efectivo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Elementos" onClick={() => actualizarSubVentana(2)}>
                <FaUserEdit></FaUserEdit> Gestión de Perfiles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="Elementos" onClick={() => actualizarSubVentana(3)}>
                <FaArchive></FaArchive> Registro de Activos Fijos
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
      <div>
        <Ventanas seleccionVentana={subVentanaActual}>Generar factura</Ventanas>
      </div>
    </div>
  );
};

export default SideBar;
