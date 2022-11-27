import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


function BotonDrop() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <Dropdown className='dropdown' isOpen={dropdownOpen} toggle={toggle} direction={'down'}>
        <DropdownToggle caret>Nombre Persona</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Perfil</DropdownItem>
          <DropdownItem>Ver Perfil</DropdownItem>
          <DropdownItem>Modificar Perfil</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Cerrar Sesion</DropdownItem>
        </DropdownMenu>
      </Dropdown>
  );
}

export default BotonDrop;