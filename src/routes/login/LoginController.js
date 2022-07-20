const express = require('express');
const router = express.Router();
const db = require('../../../mysql/index');
const loginService = require('./LoginService');
// const loginService = new LoginService();

// login/

// router.get('/', (req, res) => {
//     res.send('/login')
//     console.log('login');
// })

loginService.loginService();

module.exports = router;