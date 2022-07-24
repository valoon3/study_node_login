const express = require('express');
const router = express.Router();
const loginService = require('./LoginService');

// login/
router.post('/',async (req, res) => {
    // res.send('/login');
    await console.dir(req.body);
    // await console.dir(req.body);
    // await console.dir('req : ', req.ReqBody);
    loginService.login((selectResult) => {
        console.log(selectResult);
        res.send(selectResult);
    }, {});
    console.log('login');
})

module.exports = router;