const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // replace with your password
  database: 'form' // replace with your database name
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to database');
});

global.db = db;

// Define a schema for the CV
// In MySQL, you would typically define the schema directly in the database.

// Route for submitting CVs
app.post('/submit-cv', (req, res) => {
  const cv = {...req.body, experience: JSON.stringify(req.body.experience)};

  const query = 'INSERT INTO CV SET ?'; // replace 'CV' with your table name

  db.query(query, cv, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server error');
    } else {
      res.send('CV submitted successfully');
    }
  });
});



app.listen(3001, () => console.log('Server is running on port 3001'));
