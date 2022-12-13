import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FlujoEfectivo from './FlujoEfectivo'
import GenerarFactura from './GenerarFactura'
import GestionPerfiles from './GestionPerfiles'
import RegistroActivosFijos from './RegistroActivosFijos'

const NavPage = () => {
  return (
   <Routes>
    <Route path="/generar_factura" element= {<FlujoEfectivo />}/>
    <Route path = "/flujo_efectivo" element = {<GenerarFactura />}/>
    <Route path = "/gestion_perfiles" element = {<GestionPerfiles />}/>
    <Route path = "/registro_activos_fijos" element = {<RegistroActivosFijos />}/>
   </Routes>
  )
}

export default NavPage