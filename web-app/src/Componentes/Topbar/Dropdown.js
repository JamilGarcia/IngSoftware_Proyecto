import React, { useContext, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import styles from "../../Hojas-de-estilo/DropDown.css";

const BotonDrop = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { logoutUsuario } = useContext(AuthContext);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
      <DropdownToggle caret className="botondeperfil"> Nombre </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Perfil</DropdownItem>
        <DropdownItem tag={Link} to={"/perfil_usuario"}>
          Ver Perfil
        </DropdownItem>
        <DropdownItem tag={Link} to={"/modificar_perfil"}>
          Modificar Perfil
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={logoutUsuario}>Cerrar Sesion</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default BotonDrop;
