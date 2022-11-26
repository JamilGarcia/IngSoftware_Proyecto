const {  verifyUser } = require('../controladores/Login_Controller');
const router = require('express').Router();
//router.get('/getUsers',getUsers);

router.post("/", verifyUser);

module.exports = router;