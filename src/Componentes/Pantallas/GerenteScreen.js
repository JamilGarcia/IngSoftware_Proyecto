import React, {useState} from "react";
import SideBar from "../sidebar/SideBar";
import Topbar from "../Topbar/Topbar";
import "../../App.css";
import { Route } from "react-router-dom";
const Home_Gerente = () => {

    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <div>
      <Topbar/>
          <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
    </div>
);
}

export default Home_Gerente;
