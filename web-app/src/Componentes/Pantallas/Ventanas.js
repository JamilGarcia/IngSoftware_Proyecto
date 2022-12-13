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
      <div className='ventanasaladerecha'>
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
      <div className='ventanasaladerecha'>
        <GestionPerfiles />
      </div>
    );
  } else if (props.seleccionVentana === 3) {
    //Registro de Activos Fijos
    return (
      <div className='ventanasaladerecha'>
        <RegistroActivosFijos />
      </div>
    );
  } else if (props.seleccionVentana === 4) {
    //Registrar Facturas
    return (
      <div className='ventanasaladerecha'>
        <RegistrarFacturas />
      </div>
    );
  } else if (props.seleccionVentana === 5) {
    //Registro de Activos Fijos
    return (
      <div className='ventanasaladerecha'>
        <RegistrarActivosFijos />
      </div>
    );
  } else if (props.seleccionVentana === 6) {
    //Gestión de Perfil
    return (
      <div className='ventanasaladerecha'>
        <GestionPerfil />
      </div>
    );
  } else if (props.seleccionVentana === 7) {
    //Facturación
    return (
      <div className='ventanasaladerecha'>
        <Facturacion />
      </div>
    );
  } else if (props.seleccionVentana === 8) {
    //Cotización
    return (
      <div className='ventanasaladerecha'>
        <Cotizacion />
      </div>
    );
  } else if (props.seleccionVentana === 9) {
    //Modificar Empleado
    return (
      <div className='ventanasaladerecha'>
        <ModificarPerfil />
      </div>
    );
  } else {
    return (
      <div className='ventanasaladerecha'>
        <h1>Ocurrio un error.</h1>
      </div>
    );
  }
};

export default Ventanas;
