const express = require('express');
const router = express.Router();

// login/

router.get('/', (req, res) => {
    res.send('/login')
    console.log('login');

})

module.exports = router;