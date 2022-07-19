const express = require('express');
const router = express.Router();
const db = require('../../../mysql/index');

// login/

router.get('/', (req, res) => {
    res.send('/login')
    console.log('login');


})

module.exports = router;