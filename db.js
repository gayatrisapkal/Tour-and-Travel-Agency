// db.js
import mysql from 'mysql2/promise';

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: 'root', // Your MySQL password (leave empty if you didn't set one)
    database: 'tour_travel_agency'
});

export default connection;
