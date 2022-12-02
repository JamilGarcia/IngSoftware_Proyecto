import React from "react";

const Ventanas = (props) => {
    

    if(props.seleccionVentana === 0){
        //Generar Factura
        return (
            <div>
                <h1>Generar Factura</h1>
            </div>
        );
    } else if(props.seleccionVentana === 1){
        //Flujo de Efectivo
        return (
            <div>
                <h1>Flujo de Efectivo</h1>
            </div>
        );
    } else if(props.seleccionVentana === 2){
        //Gestion de Perfiles
        return (
            <div>
                <h1>Gestion de Perfiles</h1>
            </div>
        );
    } else if(props.seleccionVentana === 3){
        //Registro de Activos Fijos
        return (
            <div>
                <h1>Registro de Activos Fijos</h1>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Ocurrio un error.</h1>
            </div>
        );
    }
        
    
}

export default Ventanas;