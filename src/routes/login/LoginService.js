const loginDao = require('./LoginDao');

function LoginService() {
    this.login = () => {
        loginDao.login((selectRresult)=> {
            // 코드 내용
            console.log(selectRresult);
        }, {userID: 'asdf', userPassword: 'asdfd'});
    }
}


const loginService = new LoginService();
loginService.login();

module.exports = loginService;