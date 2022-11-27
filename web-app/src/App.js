import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Componentes/sidebar/SideBar";
import Topbar from "./Componentes/Topbar/Topbar";
//import Navbar from 'react-bootstrap/Navbar';
//import Content from "./Componentes/sidebar/SubMenu";
import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
      <BrowserRouter>
      <Topbar/>
        <Routes>
            <Route path="/" element={
                <><SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} /></>
            }/>
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
        </Routes>
      </BrowserRouter>
  );
};

export default App;