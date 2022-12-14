import React, {useState} from "react";
import SideBar from "../../sidebar/SideBar";
import Topbar from "../../Topbar/Topbar";
import "../../../App.css";
import "../../../Hojas-de-estilo/MainPage.css";
import { Outlet } from "react-router-dom";
import App from "../../../App";
const Home_Gerente = () => {

  return (
    <React.Fragment>
      <Topbar/>
        <div className="grid-container">
          <div><SideBar /></div>
          <div><Outlet /></div>     
        </div>
    </React.Fragment>

  );
}

export default Home_Gerente;
