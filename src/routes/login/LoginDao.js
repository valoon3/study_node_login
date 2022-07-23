const db = require('../../../mysql/index.js');

function LoginDao() {

}

LoginDao.prototype.login = (func, user) => {
// https://github.com/sidorares/node-mysql2
    const sql = 'select * from user where userID = ? and userPassword = ?';
    db.promise().query(sql, [user.userID, user.userPassword]) // error 처리 가능하도록 만들자
        .then(([rows, field]) => {
            console.log('rows: ', rows);
            if(rows.length > 0)
                return func('success');
            return func('fail');
        })
        .catch((err) => {
            console.log('login error : ', err);
        })
        //.then(() => con.end())
}

const loginDao = new LoginDao();

module.exports = loginDao;