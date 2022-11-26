const express = require('express');
const app = express();
const cors = require("cors");
const {config} = require('dotenv');
const PORT = process.env.PORT
//Middleware
app.use(express.json());
app.use(cors());//Permite comunicar servidor front-end y servidor back-end
//import route
const routePrueba = require('./routes/Login');
//initialize routes
app.use("/",routePrueba);

app.listen(PORT, () => {
  console.log(`Server empezado en el puerto ${PORT}`);
  }) 