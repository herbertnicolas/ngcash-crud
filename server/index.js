const express = require('express');
const app = express();
// const mysql = require("mysql");
const cors = require("cors");

// const db = mysql.createPool({
//     host:'localhost',
//     user:'root',
//     password:'h935763',
//     database:'bank'
// });

var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : 'h935763',
  database        : 'crud-bank'
});
 
pool.query('INSERT INTO users (nome , password) values ("herbin","password")', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// app.get("/", (req,res) => {
//     db.query("SELECT * FROM bank.users", (err, result) => {
//         res.send(result);
//     })      
// });

// app.post('/cadastro', (req,res) => {
//     const { username } = req.body;
//     const { password } = req.body;

//     let command = "INSERT INTO users (username , password) values (?,?)";
//     db.query(command, [username, password], (err, result) => {
//         console.log(err);
//     });
// });


app.listen(3001, () => {
    console.log("RODANDO SERVER");
});