const {  verifyUser } = require('../controllers/Login_Controller');
const router = require('express').Router();
//router.get('/getUsers',getUsers);

router.post("/", verifyUser);

module.exports = router;