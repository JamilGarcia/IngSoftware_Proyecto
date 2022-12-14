import React from "react";
import { NavLink} from "react-router-dom";
import "../../Hojas-de-estilo/SideBar.css";
//import SubMenu from "./SubMenu";
import { SideBarDataG } from "../Data/SideBarDataG";

const SideBar = () => {

  return(
    <React.Fragment>
      <section>
        <div className="sidebar">
        <p className="tipoUsuario">Gerente</p>
        {
            SideBarDataG.map((item, index)=> {
              return (
                <div key = {index} className="Elementos">
                  <NavLink to={item.path} className={({isActive}) => ["nav-link", isActive ? "active" : null].join("")}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </div>
              )
            })}
        </div>
      </section>
    </React.Fragment>
  );
  
};

  /*
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
  */


export default SideBar;
