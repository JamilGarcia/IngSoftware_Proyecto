import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa"; 
import { FaCashRegister } from "react-icons/fa"; 
import { FaUserEdit } from "react-icons/fa"; 
//import SubMenu from "./SubMenu";

const SideBarSG = ({ isOpen, toggle }) => {

  return (
    <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p className="tipoUsuario">Subgerente</p>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/about"}>
            <FaFileInvoiceDollar/> Registrar Facturas
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/pages"}>
            <FaCashRegister/> Registro de Activos Fijos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/faq"}>
          <FaUserEdit></FaUserEdit> Gestión de Perfil
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>

  )
}

export default SideBarSG;