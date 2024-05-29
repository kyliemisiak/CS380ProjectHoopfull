
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

app.post('/teams', (req, res) => {
  const showTeam = "SELECT * FROM players WHERE teamID = ?"
  
  db.query(showTeam, [req.body.teamID], (err, data) => {
      if (err) return res.json("team not found!")
      if(data.length > 0){
        res.send(data);
      }
  })
})

app.post('/addPlayer', (req, res) => {
  const addPlayer = "INSERT INTO players (`playerID`, `teamID`, `playerName`) VALUES (?, ?, ?)";

  
  const playerID = req.body.playerID;
  const teamID = req.body.teamID;
  const playerName = req.body.playerName;
  
  
  db.query(addPlayer, [playerID, teamID, playerName], (err, data) => {
      if (err) return res.json("Error")
      return res.json(data);
  })
})

app.post('/remove', (req, res) => {
  const removePlayer = "DELETE FROM players WHERE playerName= ?";

  const playerName = req.body.playerName;
  
  db.query(removePlayer, [playerName], (err, data) => {
      if (err) return res.json("Player not found")
      return res.json(data);
  })
})


// Start the server
app.listen(8801, () => {
  console.log("listening....");
});
