const loginDao = require('./LoginDao');

function LoginService() {
    this.login = (callback, user) => {

        loginDao.login((selectResult) => {
            if(selectResult.length > 0) {
                callback('success');
            }
            else {
                callback('아이디, 비밀번호를 확인해주세요.');
            }
        }, {userID: 'asdf', userPassword: 'asdf'});

    }


}


const loginService = new LoginService();

module.exports = loginService;