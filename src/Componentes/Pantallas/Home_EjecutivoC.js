import SideBarEjec from "../sidebar/SideBarEjec";
import TopBar from "../Topbar/Topbar";
import "../../App.css";
import React, {useState} from "react";

const Home_EjecutivoC = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return(
        <>
             <TopBar />
             <SideBarEjec  toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        </>
    )
}

export default Home_EjecutivoC;