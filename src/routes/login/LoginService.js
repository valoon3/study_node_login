const loginDao = require('./LoginDao');
const db = require("../../../mysql/index");

let a;

// db.promise().query('select * from user')
//     .then(async ([rows, field]) => {
//         console.log(rows);
//         a = await rows;
//     })
//     .catch((err) => {
//         console.log(err);
//     })

function LoginService() {

}

LoginService.prototype.loginService = function() {
    console.log('hello');
}

const loginService = new LoginService();

// module.exports = LoginService;
module.exports = loginService;