import BotonDrop from "./Dropdown";

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