import React from "react";
import Topbar from "../../Topbar/Topbar";
import "../../../App.css";
import "../../../Hojas-de-estilo/MainPage.css";
import { Outlet } from "react-router-dom";
import SideBarSG from "../../sidebar/SideBarSG";

const SubgerenteScreen = () => {
  return (
    <React.Fragment>
      <Topbar/>
        <div className="grid-container">
          <div><SideBarSG /></div>
          <div><Outlet /></div>     
        </div>
    </React.Fragment>

  );
}

export default SubgerenteScreen;
