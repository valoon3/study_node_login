const express = require('express');
const db = require('../mysql/index');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const port = 8080;
const LoginController = require('../src/routes/login/LoginController');


dotenv.config(); // 같은 폴더를 우선으로 본다 //

app.listen(port, () => {
    console.log('앱 실행', port);
})

// 미들웨어 내용들 front back 에 넣기

app.use(express.json()); // body json 설정
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUnitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookies: {
        httpOnly: true,
        secure: false,
    },
    name: 'session-cookies',
}))

app.use(LoginController);


app.get('/', (req, res) => {
    res.send('hello world!!!');
    // db.query('select * from board', (err, rows) => {
    //     console.log(rows);
    // })

});