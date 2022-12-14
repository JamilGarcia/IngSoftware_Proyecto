import '../../../Hojas-de-estilo/FlujoEfectivo.css';
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
/*const fs = require('fs');
const pdf = require('pdf-parse');
let dataBuffer = fs.readFileSync('path to PDF file...');*/
const FlujoEfectivo = () => {
  const deuda_generada= 
    {
      no_de_referencia:"9821721987",
      fecha: "2022-12-14",
      concepto: "La Colonia Teg",
      valor: "2187",
      descipcion: "",
      categoria: "",
    };
/*
  
    const [nuevaDeuda, setNuevaDeuda] = useState({
        no_de_referencia:"",
        fecha:"",
        concepto:"",
        valor:"",
        descripcion:"",
        categoria: "",
    });
    function deuda(no_referencia, fecha, concepto, monto) {
      this.no_referencia = no_referencia;
      this.fecha = fecha;
      this.concepto = concepto;
      this.monto = monto;
  }
 
  const uploadArchivo = pdf(dataBuffer).then(data => {
    let deudas1="";
    let deudas2="";
    let position=0;
    let position2=0;
    let final=0;
    let result="";
    let index=0;
    let temp="";
    let ref="";
    let fe="";
    let concep="";
    let temp2="";
    let mont="";
    let myArray="";

        deudas1=data.text
        position = deudas1.search("MIGUEL ROBERTO/BLANCO ARIAS");
        position2=deudas1.search("Límite de Crédito");
        final=position2-position
        result = deudas1.substr(position, final);
        index = result.search(/[0-9]/);
        deudas1=result.substring(index,final)
        
        // Paso todo a un array sin los saltos de linea
        myArray = deudas1.split("\n");
        
        //Pasar los indices a una cadena para poder hacer el parseo 
        for (let index = 0; index < myArray.length-1; index++) {
            temp=myArray[index].toString()
            temp=temp.toLocaleLowerCase()
            ref=temp.substr(0,temp.indexOf("/")-3)
            fe=temp.substr(temp.search(/[a-z]/),temp.indexOf(" ")+4)
        
            temp2=temp.substr(temp.search("/")+3)
            if(temp2.includes(":")){
                concep=temp2.slice(0,temp2.search(":")+3)   
                mont=temp2.slice(temp2.search(":")+3,temp2.length)
            }else{
                concep=temp2.slice(0,temp2.search(/[0-9]/))   
                mont=temp2.slice(temp2.search(/[0-9]/),temp2.length)     
            }
            const de=new deuda(ref,fe,concep,mont)
            nuevaDeuda.no_de_referencia=ref;
            nuevaDeuda.fecha=fe;
            nuevaDeuda.concepto=concep;
            nuevaDeuda.valor=mont;
            nuevaDeuda.descripcion=""
            nuevaDeuda.categoria=""
        }
           //Por lo menos con dos paginas funciona aun esto 
            deudas2=data.text   
            position=deudas2.search("Ofrecimiento sujeto a aprobación y/o a cambios")
            position2=deudas2.search("INFORMACIÓN SOBRE FÓRMULAS DE CÁLCULO DE SU ESTADO DE CUENTA")
            final=position2-position
            result = deudas2.substr(position, final);
            index = result.search(/[0-9]/);
            deudas2=result.substring(index,final)
            //Paso todo a un array sin los saltos de linea
            myArray = deudas2.split("\n");
        
            //Pasar los indices a una cadena para poder hacer el parseo 
            for (let index = 0; index < myArray.length-1; index++) {
          
                temp=myArray[index].toString()
                temp=temp.toLocaleLowerCase()
                ref=temp.substr(0,temp.indexOf("/")-3)
                fe=temp.substr(temp.search(/[a-z]/),temp.indexOf(" ")+4)
        
                temp2=temp.substr(temp.search("/")+3)
                console.log(ref)
                console.log(fe)
                if(temp2.includes(":")){
                    concep=temp2.slice(0,temp2.search(":")+3)   
                    mont=temp2.slice(temp2.search(":")+3,temp2.length)
                }else{
                    concep=temp2.slice(0,temp2.search(/[0-9]/))   
                    mont=temp2.slice(temp2.search(/[0-9]/),temp2.length)     
                }
                const de=new deuda(ref,fe,concep,mont)
                nuevaDeuda.no_de_referencia=ref;
                nuevaDeuda.fecha=fe;
                nuevaDeuda.concepto=concep;
                nuevaDeuda.valor=mont;
                nuevaDeuda.descripcion=""
                nuevaDeuda.categoria=""
                //Mandar datos al back-end
                const body = {
                  no_de_referencia: nuevaDeuda.no_de_referencia,
                  fecha : nuevaDeuda.fecha,
                  concepto : nuevaDeuda.concepto,
                  valor: nuevaDeuda.valor,
                  descripcion: nuevaDeuda.descripcion,
                  categoria: nuevaDeuda.categoria
                }
                
            }
    });*/
  const [myValue,setMyValue] = useState(0);
  const [contadorCadena, setContadorCadena] = useState("");
  const navigate = useNavigate();
  
  const createFile = () => {
    //setMyValue(myValue+1);
   // console.log("Hola:");
    //const blob = new Blob([myValue],{type:'text/plain;charset=utf-8'});
    //saveAs(blob, 'mi-archivo.csv');
    
   // console.log(ob);
   var data = [
    {
      no_de_referencia:"25 0608101007776300",
      fecha: "JUN/08",
      concepto: "SEGURO DE SALDO DE DEUDA ANUAL",
      valor: "419.93",
      descipcion: "",
      categoria: "",
  },
  {
      no_de_referencia:"36 0608101007776300",
      fecha: "JUN/08",
      concepto: "  SEGURO DE SALDO DE DEUDA ANUAL",
      valor: "417.55-",
      descipcion: "",
      categoria: "",
  },
  {
      no_de_referencia:"25 0609101007776300",
      fecha: "JUN/08",
      concepto: "SEGURO DE HRE PLUS MENSUAL",
      valor: "58.50",
      descipcion: "",
      categoria: "",
  },
  {
      no_de_referencia:"25 0609101007776300",
      fecha: "JUN/08",
      concepto: "  SEGURO DE SALDO DE DEUDA MENS",
      valor: "61.90",
      descipcion: "",
      categoria: "",
  }
  ];
    var table = document.getElementById('mytable');
    for(var i = 0 ; i < data.length;i++){
      var row = `<tr>
                    <td>${data[i].no_de_referencia}</td>
                    <td>${data[i].fecha}</td>
                    <td>${data[i].concepto}</td>
                    <td>${data[i].valor}</td>
                    <td>${data[i].descipcion}</td>
                    <td>${data[i].categoria}</td>
                  </tr>`
            table.innerHTML += row
            //setContadorCadena(...myValue+data[i].no_de_referencia+","+data[i].fecha+","+data[i].concepto+","+data[i].valor+","+data[i].descipcion+","+data[i].categoria+"\n");  
            //consolo.log(myValue);
    }
    
  }
  return (
    <React.Fragment>
    <section>
    <input type="file" style={{backgroundColor: 'red'}}></input>
    <button type='submit' onClick={createFile}>
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
        <button className="boton-tabla" >Export to CSV</button>
        <button className="boton-tabla" onClick={() => navigate('/descripcion_tabla')}>Descripcion y Categoria de tabla</button>
      </div>
    </section>
  </React.Fragment>
);
}

export default FlujoEfectivo;