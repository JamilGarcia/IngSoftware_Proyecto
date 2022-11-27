const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./db');
const port = 5000;
//Middleware
app.use(express.json());
app.use(cors());//Permite comunicar servidor front-end y servidor back-end
//import route
const routePrueba = require('./routes/Login');
//initialize routes
app.use("/",routePrueba);
 
app.listen(5000, () => {
  console.log(`Server empezado en el puerto 5000`);
  })
