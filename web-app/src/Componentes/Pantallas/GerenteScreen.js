import React, {useState} from "react";
import SideBar from "../sidebar/SideBar";
import Topbar from "../Topbar/Topbar";
import "../../App.css";
import "../../Hojas-de-estilo/MainPage.css";
import NavPage from "./VentanasGerente/NavPage";
const Home_Gerente = () => {

  return (
    <React.Fragment>
      <Topbar/>
        <div className="grid-container">
          <SideBar />
          <div></div>
        </div>
    </React.Fragment>

  );
}

export default Home_Gerente;
