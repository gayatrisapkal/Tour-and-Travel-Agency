import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3002;

app.use(express.static('public'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'tour_travel_agency'
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// Handle Booking Form Submission
app.post('/api/book', (req, res) => {
    const { place_name, number_of_guests, arrival_date, leaving_date } = req.body;

    const sql = 'INSERT INTO bookings (place_name, number_of_guests, arrival_date, leaving_date) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [place_name, number_of_guests, arrival_date, leaving_date], (err, result) => {
        if (err) {
            console.error('Error inserting booking:', err);
            return res.status(500).json({ error: 'Database insertion error' });
        }
        res.status(201).json({ message: 'Booking successful', bookingId: result.insertId });
    });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



