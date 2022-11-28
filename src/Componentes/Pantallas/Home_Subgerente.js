import SideBarSG from "../sidebar/SideBarSG";
import TopBar from "../Topbar/Topbar";
import "../../App.css";
import React, {useState} from "react";

const Home_Subgerente = () => {
    const [sidebarIsOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

    return(
        <>
             <TopBar />
             <SideBarSG  toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        </>
    )
}

export default Home_Subgerente;