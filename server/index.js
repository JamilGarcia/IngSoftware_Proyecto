const express = require('express');
const app = express();
const cors = require("cors");
const {config} = require('dotenv');
//Middleware
app.use(express.json());
app.use(cors());//Permite comunicar servidor front-end y servidor back-end
//import route
const routePrueba = require('./routes/Login');
//initialize routes
app.use("/",routePrueba);

app.listen(process.env.PORT, () => {
  console.log(`Server empezado en el puerto ${process.env.PORT}`);
  }) 
