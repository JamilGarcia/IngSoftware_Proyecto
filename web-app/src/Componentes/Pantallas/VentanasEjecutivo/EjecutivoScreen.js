import React from "react";
import Topbar from "../../Topbar/Topbar";
import "../../../App.css";
import "../../../Hojas-de-estilo/MainPage.css";
import { Outlet } from "react-router-dom";
import SideBarEjec_C from "../../sidebar/SideBarEjec";

const EjecutivoScreen = () => {
  return (
    <React.Fragment>
      <Topbar/>
        <div className="grid-container">
          <div><SideBarEjec_C /></div>
          <div><Outlet /></div>     
        </div>
    </React.Fragment>

  );
}

export default EjecutivoScreen;