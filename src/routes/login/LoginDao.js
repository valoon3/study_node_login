const db = require('../../../mysql/index');

function LoginDao() {

    this.selectUser = async () => {
        let rows = await db.query('select * from user');
        return rows;
    }

}

// const selectUser = () => {
//     db.query('select * from user', (err, r) => {
//         console.log(r);
//     })
//
//     return {
//
//     }
// }
let a = new LoginDao();
a.selectUser()
    .then((r) => {
        console.log(r);
    })

module.exports = new LoginDao();