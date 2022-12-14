import BotonDrop from "./Dropdown";
import styles from "../../Hojas-de-estilo/TopBar.css";
import React from "react";
const TopBar = () => {
  return (
    <React.Fragment>
      <div className="topbar">
      <div className="topbar-left">
        ComunicArte
      </div>
      <div className="topbar-right">
        <BotonDrop/>
      </div>
    </div>
    </React.Fragment>
    
  );
}

export default TopBar;