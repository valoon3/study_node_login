const express = require('express');
const router = express.Router();
const loginService = require('./LoginService');

// login/
router.post('/',async (req, res) => {
    console.dir(req.body);
    loginService.login((selectResult) => {
        console.log(selectResult);
        res.send(selectResult);
    }, req.body);
})

module.exports = router;