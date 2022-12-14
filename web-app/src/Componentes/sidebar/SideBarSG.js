import React from "react";
import {  NavLink} from "react-router-dom";
import { SideBarDataSubG } from "../Data/SideBarDataSG";
import "../../Hojas-de-estilo/SideBar.css";

const SideBarSG = () => {
  return(
    <React.Fragment>
      <section>
        <div className="sidebar">
        <p className="tipoUsuario">Subgerente</p>
        {
            SideBarDataSubG.map((item, index)=> {
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
}

export default SideBarSG;