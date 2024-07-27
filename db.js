const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'db45'
});

// Open the connection
connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

// Close the connection
connection.end(err => {
  if (err) {
    console.error('Error closing the connection:', err);
    return;
  }
  console.log('Connection closed');
});
