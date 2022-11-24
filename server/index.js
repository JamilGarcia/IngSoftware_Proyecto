const express = require('express');
const app = express();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(cors());//Permite comunicar servidor front-end y servidor back-end
//import route
const routePrueba = require('./routes/Login');
//initialize routes
app.use("/",routePrueba);

app.listen(5000, () => {
    console.log("listening on http://localhost:5000");
  }) 