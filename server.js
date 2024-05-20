
// reading, maybe better??: https://expressjs.com/en/guide/database-integration.html

// dependencies
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express(); // server
const port = 3308;

app.use(cors()); // Cross-Origin Resource Sharing
app.use(bodyParser.json()); // https://www.npmjs.com/package/body-parser

// CONFIGURATION 
// breakout in ENV vars
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hoopfulDB'
});

// Connect to the database??
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// route to get data
app.get('/api/data', (req, res) => {
  db.query('SELECT * Teams', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
