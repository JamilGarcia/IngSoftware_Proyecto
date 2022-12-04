import BotonDrop from "./Dropdown";
import styles from "../../Hojas-de-estilo/TopBar.css";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        ComunicArte
      </div>
      <div className="topbar-right">
        <BotonDrop/>
      </div>
    </div>
  );
}

export default TopBar;