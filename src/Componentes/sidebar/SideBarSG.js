import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FaFileInvoiceDollar } from "react-icons/fa"; 
import { FaCashRegister } from "react-icons/fa"; 
import { FaUserEdit } from "react-icons/fa"; 
//import SubMenu from "./SubMenu";

const SideBarSG = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>ComunicArte</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>*SubGerente*</p>
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
);

export default SideBarSG;