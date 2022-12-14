import '../../../Hojas-de-estilo/FlujoEfectivo.css';
import React from "react";
import { useState } from "react";

const FlujoEfectivo = () => {
  const deuda_generada= {
    no_de_referencia:"9821721987",
    fecha: "2022-12-14",
    concepto: "La Colonia Teg",
    valor: "2187",
    descipcion: "",
    categoria: "",
  };
  const [myValue,setMyValue] = useState(0);
  const createFile = () => {
    //setMyValue(myValue+1);
   // console.log("Hola:");
    //const blob = new Blob([myValue],{type:'text/plain;charset=utf-8'});
    //saveAs(blob, 'mi-archivo.csv');
    const ob = JSON.stringify(deuda_generada);
   // console.log(ob);
    var table = document.getElementById('mytable');
    var row = `
                <tr>
                  <td>${deuda_generada.no_de_referencia}</td>
                  <td>${deuda_generada.fecha}</td>
                  <td>${deuda_generada.concepto}</td>
                  <td>${deuda_generada.valor}</td>
                  <td>${deuda_generada.descipcion}</td>
                  <td>${deuda_generada.categoria}</td>
                </tr>
              `
        table.innerHTML += row
  }
  return (
    <React.Fragment>
    <section>
    <input type="file" style={{backgroundColor: 'red'}}></input>
    <button type='submit'>
        Upload
      </button>
      <div className="scrollit">
      <table
          id = "mytable"
          class="table table-striped"
          data-toggle="table"
          data-url="data2.json"
        >
          <thead>
            <tr>
              <th scope="col"># de Referecia</th>
              <th scope="col">Fecha</th>
              <th scope="col">Concepto</th>
              <th scope="col">Valor</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Categoria</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="botones-tabla">
        <button className="boton-tabla" onClick={createFile}>Export to CSV</button>
        <button className="boton-tabla">Descripcion y Categoria de tabla</button>
      </div>
    </section>
  </React.Fragment>
);
}

export default FlujoEfectivo;