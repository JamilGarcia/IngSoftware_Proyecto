import React, {useState} from "react";
import SideBar from "../sidebar/SideBar";
import Topbar from "../Topbar/Topbar";
import "../../App.css";
import { Route } from "react-router-dom";
const Home_Gerente = () => {

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <>
    <Topbar/>
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />

          {/*
            <><Route path="/about" element={
              <><SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} /></>
          } /></> 
          <Route path="/pages" element={
              <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          }/>
          <Route path="/faq" element={
              <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          }/>
          <Route path="/contact" element={
              <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
          }/>
          
          */ }
      </>
);
}

export default Home_Gerente;
