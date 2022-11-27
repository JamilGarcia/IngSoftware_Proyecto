import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa"; 
import { FaCashRegister } from "react-icons/fa"; 
import { FaUserEdit } from "react-icons/fa"; 
import { FaArchive } from "react-icons/fa";
//import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="side-menu">
      <Nav vertical>
        <p className="tipoUsuario">*Gerente*</p>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/about"}>
            <FaFileInvoiceDollar/> Generar factura
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/pages"}>
            <FaCashRegister/> Flujo de Efectivo
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/faq"}>
          <FaUserEdit></FaUserEdit> Gestión de Perfiles
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "ElementosLargo" tag={Link} to={"/contact"}>
            <FaArchive></FaArchive> Registro de Activos Fijos
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);


export default SideBar;
