import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs"; 
import { BsFillChatLeftQuoteFill } from "react-icons/bs";
//import SubMenu from "./SubMenu";

const SideBarEjec = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>ComunicArte</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>*Ejecutivo*</p>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/about"}>
            <BsFillCartCheckFill/> Facturación
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className = "Elementos" tag={Link} to={"/pages"}>
            <BsFillChatLeftQuoteFill/> Cotización
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

export default SideBarEjec;