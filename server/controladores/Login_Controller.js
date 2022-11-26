const db = require('../db');

exports.verifyUser = async (req,res) => {
    try {
        /*1. Obtener datos de cliente de login, 
        - Se hace destructuring de req.body a (email, password)*/
        const {login_Email , login_Password} = req.body;
        console.log(req.body);
        // /*2. Revisar si usuario no existe (Tirar error) $1 es para sustituir con login_Email
        // Usar query para ver si existe dentro de la base el correo*/
        if(Object.keys(req.body).length !== 0){
            const usuario = await db.query("SELECT * FROM users WHERE correo_user = $1 ;",[login_Email]);

            if(usuario.rows.length === 0){
                return res.status(401).send("Correo o contraseña es incorrecto.");
            }
            /*3. Si usuario existe, revisar si contraseña es la misma que en la 
                base de datos */
            const passwordValida = usuario.rows[0].password_user;

            if(login_Password === passwordValida){
                //Contraseña es la misma
                // console.log("Inicio de sesión exitoso!");
                // console.log(usuario.rows[0].posicion);
                res.json(
                    {"Posicion": usuario.rows[0].posicion}
                    );
            } else {
                return res.status(401).send("Correo o contraseña es incorrecto.");
            }
        } else {
            //Retornar mensaje que n
        }
    } catch (error) {
        res.status(500).send("Server Error");
    }
} 