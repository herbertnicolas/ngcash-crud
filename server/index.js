const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "h935763",
    database: "crud-bank"
});

app.use(cors());
app.use(express.json);

app.get('/', (req,res) => {
    let code = "INSERT INTO users ( username, password) values ('Anthony', '123456')";

    db.query(code, (err, result)=>{
        console.log(err); 
    });
});

// app.post('/cadastro', (req,res) => {
//     const { username } = req.body;
//     const { password } = req.body;

//     let command = "INSERT INTO users (username , password) values (?,?)";
//     db.query(command, [username, password], (err, result) => {
//         console.log(err);
//     });
// });


app.listen(3001, ()=>{
    console.log("RODANDO SERVER")
});