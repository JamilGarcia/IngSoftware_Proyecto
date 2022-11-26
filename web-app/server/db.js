const Pool = require('pg').Pool//allows to configure connection
const {db} = require('./config');
//Datos para conectarse con Postgres


const pool = new Pool({
	user: db.user,
	password: db.password,
	host: db.host,
	port: db.port,
	database: db.database
});
 
module.exports = pool;//What is used in routes to manipulate data
