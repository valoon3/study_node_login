const loginDao = require('./LoginDao');

const login = function(callback, user) {
    loginDao.login((selectResult) => {
        if(selectResult.length > 0) {
            callback('success');
        }
        else {
            callback('아이디, 비밀번호를 확인해주세요.');
        }
    }, user)
        .catch(err => { console.error(err)})
}

module.exports = { login };