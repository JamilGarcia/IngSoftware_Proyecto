const express = require('express');
const app = express();
const cors = require("cors");
const db = require('./db');
const port = process.env.PORT || 5000;

//process.env.NODE_ENV => production or undefined

//Middleware
app.use(express.json());
app.use(cors());//Permite comunicar servidor front-end y servidor back-end


//import route
const routePrueba = require('./routes/Login');
//initialize routes
app.use("/",routePrueba);
 
app.listen(port, () => {
  console.log(`Server empezado en el puerto ${port}`);
  })
