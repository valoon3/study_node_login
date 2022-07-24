const db = require('../../../mysql/index.js');

function LoginDao() {

}

LoginDao.prototype.login = async function(callback, user) {
    // https://github.com/sidorares/node-mysql2
    const sql = 'select * from `user` where `userID` = ? and `userPassword` = ?';

    const [rows, field] = await db.query(sql, [user.userID, user.userPassword]);
    callback(rows);
}

const loginDao = new LoginDao();

//

//

module.exports = loginDao;