const mysql = require('mysql2/promise');

// async function createConnection() {
//     const connection = await mysql.createConnection({
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: '1234',
//         connectionLimit: 5,
//         database: 'board_db',
//     });
//
//     const [rows, field] = await connection.execute('select * from user');
//     console.log('rows!!!', rows);
//     return rows;
// }

// const rows = createConnection();
// console.log(rows.then(r => console.log(r)));

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     port: 3306,
//     user: 'root',
//     password: '1234',
//     connectionLimit: 5,
//     database: 'board_db',
// });

const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    connectionLimit: 5,
    database: 'board_db',
});

module.exports = connection;