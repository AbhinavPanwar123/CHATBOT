var express = require('express');
const { registerController, loginController, logoutController } = require('../Controller/auth');
const CheckCustomer = require('../middleware/validator');
var router = express.Router();


//Register
router.post('/register',registerController,CheckCustomer);

//Login
router.post('/login',loginController,CheckCustomer);

//Logout
router.post('/logout',logoutController);

module.exports = router;
