const Pool = require('pg').Pool//allows to configure connection
const {db} = require('./config');
const { Client } = require('pg');
/*
const client = new Client({
  connectionString: "postgres://bzjzotnjsnygmw:e4cfb1e16da83acb0decbbd18981219e12525b51a1001e3cb3837d8593ff5468@ec2-54-86-214-124.compute-1.amazonaws.com:5432/d8lodrec6ir4ed",
  ssl: {
    rejectUnauthorized: false
  }
}); */


const client = new Client({
	connectionString: "postgres://bzjzotnjsnygmw:e4cfb1e16da83acb0decbbd18981219e12525b51a1001e3cb3837d8593ff5468@ec2-54-86-214-124.compute-1.amazonaws.com:5432/d8lodrec6ir4ed",
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