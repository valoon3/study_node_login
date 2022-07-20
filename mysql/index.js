const mysql = require('mysql2');


// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: '1234',
//     connectionLimit: 5,
//     database: 'board_db',
// });

const connection = mysql.createConnection({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    connectionLimit: 5,
    database: 'board_db',
});

// const test2 = test();
// test2.query('select * from board', (err, r) => {
//     console.log(r);
// })

// module.export = test();
module.exports = connection;