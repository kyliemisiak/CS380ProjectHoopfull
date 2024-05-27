
// reading, maybe better??: https://expressjs.com/en/guide/database-integration.html

// dependencies
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express(); // server

app.use(cors()); // Cross-Origin Resource Sharing
app.use(express.json());
// CONFIGURATION 
// breakout in ENV vars
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hello1234',
  database: 'hoopfulDB'
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM captain WHERE userName = ? AND pass = ?"
    
    db.query(sql, [req.body.username, req.body.password], (err, data) => {
        if (err) return res.json("Login Failed")
        if(data.length > 0){
          res.send(data);
        }else{
          res.send({message : "Incorrect username/password"});
        }
    })
})


// Start the server
app.listen(8801, () => {
  console.log("listening....");
});
