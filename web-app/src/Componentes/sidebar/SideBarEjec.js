import React from "react";
import {  NavLink} from "react-router-dom";

import "../../Hojas-de-estilo/SideBar.css";
import { SideBarDataEjec_C } from "../Data/SideBarDataEC";

const SideBarEjec_C = () => {
  return(
    <React.Fragment>
      <section>
        <div className="sidebar">
        <p className="tipoUsuario">Ejecutivo Cuenta</p>
        {
            SideBarDataEjec_C.map((item, index)=> {
              return (
                <div key = {index} className="nav-item">
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
}

export default SideBarEjec_C;