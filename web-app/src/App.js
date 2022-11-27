import React, { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Componentes/sidebar/SideBar";
import SideBarSG from "./Componentes/sidebar/SideBarSG";
import SideBarEjec from "./Componentes/sidebar/SideBarEjec";
import Topbar from "./Componentes/Topbar/Topbar";
//import Navbar from 'react-bootstrap/Navbar';
//import Content from "./Componentes/sidebar/SubMenu";
import "./App.css";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    if ("Gerente"){
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
    } else if ("SubGerente") {
        return (
            <BrowserRouter>
            <Topbar/>
                <Routes>
                    <Route path="/" element={
                        <><SideBarSG toggle={toggleSidebar} isOpen={sidebarIsOpen} /></>
                    }/>
                    <><Route path="/about" element={
                        <><SideBarSG toggle={toggleSidebar} isOpen={sidebarIsOpen} /></>
                    } /></>
                    <Route path="/pages" element={
                        <SideBarSG toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    }/>
                    <Route path="/faq" element={
                        <SideBarSG toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    }/>
                    <Route path="/contact" element={
                        <SideBarSG toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    }/>
                </Routes>
            </BrowserRouter>
        );
    } else if ("Ejecutivo") {
        return (
            <BrowserRouter>
            <Topbar/>
                <Routes>
                    <Route path="/" element={
                        <><SideBarEjec toggle={toggleSidebar} isOpen={sidebarIsOpen} /></>
                    }/>
                    <><Route path="/about" element={
                        <><SideBarEjec toggle={toggleSidebar} isOpen={sidebarIsOpen} /></>
                    } /></>
                    <Route path="/pages" element={
                        <SideBarEjec toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    }/>
                    <Route path="/faq" element={
                        <SideBarEjec toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    }/>
                    <Route path="/contact" element={
                        <SideBarEjec toggle={toggleSidebar} isOpen={sidebarIsOpen} />
                    }/>
                </Routes>
            </BrowserRouter>
        );
    } else {
        <h1>ERROR</h1>
    }
};

export default App;