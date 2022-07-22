const db = require('../../../mysql/index.js');

// let a = db.query('select * from board');


// function LoginDao() {
//
//     // this.selectUser = async () => {
//     //     let rows = await db.query('select * from user');
//     //     return rows;
//     // }
//
//     this.selectUser = async () => {
//         let a = await db.query('select * from user');
//
//         return a;
//     }
//
//
//
// }

// const selectUser = () => {
//     db.query('select * from user', (err, r) => {
//         console.log(r);
//     })
//
//     return {
//
//     }
// }

// let a = new LoginDao();
// a.selectUser()
//     .then((r) => {
//         console.log(r);
//     })

// module.exports = new LoginDao();


const test = async (func) => {
    let a = await db.query('select * from user', (err, rows, field) => {
        // func(a);
        console.log(rows);
    })
    return a;
}

function LoginDao() {

}

LoginDao.prototype.login = (func) => {
    // db.query('select * from user', (err, rows, field) => {
    //     console.log(rows);
    //     func(rows);
    // })
    // https://github.com/sidorares/node-mysql2
    db.promise().query('select * from user') // error 처리 가능하도록 만들자
        .then(([rows, field]) => {
            console.log(rows);
        })
        .catch((err) => {

        })
        //.then(() => con.end())

}




// let a = test((a) => {return a});
// console.log(a);

const loginDao = new LoginDao();

loginDao.login();

module.exports = loginDao;