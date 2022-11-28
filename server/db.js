const Pool = require('pg').Pool//allows to configure connection
const {db} = require('./config');
const { Client } = require('pg');
/*
const client = new Client({
  //connectionString: "",
  ssl: {
    rejectUnauthorized: false
  }
}); */


const client = new Client({
	//connectionString: "",
	ssl: {
		rejectUnauthorized: false
	}
})

client.connect();

//const usuario =  client.query("SELECT * FROM users")


//Datos para conectarse con Postgres



//const pool = new Pool({
//	user: db.user,
//	password: db.password,
//	host: db.host,
//	port: db.port,
//	database: db.database
//});
 
//module.exports = pool;//What is used in routes to manipulate data
module.exports = client;