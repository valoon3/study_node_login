const express = require('express');
const router = express.Router();
const loginService = require('./LoginService');

// login/
router.post('/login',async (req, res) => {
    loginService.login((selectResult, cookieStatus) => {
        console.log(selectResult);
        res.cookie('logedIn', cookieStatus.userID, {maxAge: 15*60*1000, httpOnly: true, path: '/'});
        // res.clearCookie('logedIn');
        res.send(selectResult);
    }, req.body, res);
})

router.get('/logout',async (req, res) => {
    // res.clearCookie('logedIn');
    await loginService.logout(req, res);
    res.send('cookie delete');
})




module.exports = router;