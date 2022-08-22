const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'huydo',
    password: 'Huydothe1999@',
    database: 'demo2',
    charset: 'utf8_general_ci'
});

connection.connect(function (err){
    if(err){
        throw err.stack;
    }else {
        console.log('Connect success')
    }
});

// const insertMysql = "insert into products(id,productCode,productName,productPrice,productAmount,productDescription,productStatus) value(12,'12df','iphone12',3000,54,'good choice',1)";
// connection.query(insertMysql,(err,results,fields)=>{
//     if(err){
//         throw err;
//     }
//     console.log('insert success')
// });

const sqlUpdate = "UPDATE products SET productAmount = 8 WHERE productName = 'iphone12'";
connection.query(sqlUpdate, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
});