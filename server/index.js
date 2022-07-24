const express = require('express');
const db = require('../mysql/index');
const app = express();
const cookieParser = require('cookie-parser');
const port = 8080;

const LoginController = require('../src/routes/login/LoginController');

app.listen(port, () => {
    console.log('앱 실행', port);
})

app.use(express.json());
app.use(cookieParser());

app.use(LoginController);


app.get('/', (req, res) => {
    res.send('hello world!!!');
    // db.query('select * from board', (err, rows) => {
    //     console.log(rows);
    // })

});