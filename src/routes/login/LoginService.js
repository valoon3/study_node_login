const loginDao = require('./LoginDao');
const db = require("../../../mysql/index");


const dbTest = async () => {
    const connection = await db.getConnection((err, su) => su);
    const rows = await connection.query('select * from user');


    return rows;

}
let a = dbTest();
console.log(typeof a);
console.log(a);