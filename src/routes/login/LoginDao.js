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




// let a = test((a) => {return a});
// console.log(a);
