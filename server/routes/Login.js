const {  verifyUser, testUser } = require('../controladores/Login_Controller');
const router = require('express').Router();
//router.get('/getUsers',getUsers);

router.post("/", verifyUser);
router.get("/test", testUser);

module.exports = router;