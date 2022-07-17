const express = require('express');
const db = require('../mysql/index');
const app = express();
const port = 8080;

const LoginController = require('../src/routes/login/LoginController');

app.listen(port, () => {
    console.log('앱 실행', port);
})

app.use('/login', LoginController);


app.get('/', (req, res) => {
    res.send('hello world!!!');
    // db.query('select * from board', (err, rows) => {
    //     console.log(rows);
    // })

});