const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'curasphere',
    
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        console.log('Connection config:', {
            host: process.env.DB_HOST || 'localhost',
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || '',
            database: process.env.DB_NAME || 'curasphere',
            port: process.env.DB_PORT || 3306
        });
        return;
    }
    console.log('Connected to the MySQL database curasphere');
});

// Basic route to check server
app.get('/', (req, res) => {
    res.send('Welcome to Curasphere API!');
});

// Define the port
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
