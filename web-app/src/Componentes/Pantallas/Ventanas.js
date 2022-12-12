import React from "react";
import GenerarFactura from "./VentanasGerente/GenerarFactura";
import FlujoEfectivo from "./VentanasGerente/FlujoEfectivo";
import GestionPerfiles from "./VentanasGerente/GestionPerfiles";
import RegistroActivosFijos from "./VentanasGerente/RegistroActivosFijos";
import GestionPerfil from "./VentanasSubGerente/GestionPerfil";
import RegistrarFacturas from "./VentanasSubGerente/RegistrarFacturas";
import RegistrarActivosFijos from "./VentanasSubGerente/RegistroActivosFijos";
import Cotizacion from "./VentanasEjecutivo/Cotizacion";
import Facturacion from "./VentanasEjecutivo/Facturacion";
import styles from "../../Hojas-de-estilo/Ventana.css";
import ModificarPerfil from "./ModificarPerfil";

const Ventanas = (props) => {
  if (props.seleccionVentana === 0) {
    //Generar Factura
    return (
      <div>
        <GenerarFactura />
        {/* <ModificarPerfil /> */}
      </div>
    );
  } else if (props.seleccionVentana === 1) {
    //Flujo de Efectivo
    return (
      <div className='ventanasaladerecha'>
        <FlujoEfectivo />
      </div>
    );
  } else if (props.seleccionVentana === 2) {
    //Gestion de Perfiles
    return (
      <div>
        <GestionPerfiles />
      </div>
    );
  } else if (props.seleccionVentana === 3) {
    //Registro de Activos Fijos
    return (
      <div>
        <RegistroActivosFijos />
      </div>
    );
  } else if (props.seleccionVentana === 4) {
    //Registrar Facturas
    return (
      <div>
        <RegistrarFacturas />
      </div>
    );
  } else if (props.seleccionVentana === 5) {
    //Registro de Activos Fijos
    return (
      <div>
        <RegistrarActivosFijos />
      </div>
    );
  } else if (props.seleccionVentana === 6) {
    //Gestión de Perfil
    return (
      <div>
        <GestionPerfil />
      </div>
    );
  } else if (props.seleccionVentana === 7) {
    //Facturación
    return (
      <div>
        <Facturacion />
      </div>
    );
  } else if (props.seleccionVentana === 8) {
    //Cotización
    return (
      <div>
        <Cotizacion />
      </div>
    );
  } else if (props.seleccionVentana === 9) {
    //Modificar Empleado
    return (
      <div>
        <ModificarPerfil />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Ocurrio un error.</h1>
      </div>
    );
  }
};

export default Ventanas;
