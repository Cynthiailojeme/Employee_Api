const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); 

const app = express();

const db = require('./config/db').database;

// Database Connection

mongoose.connect(db, {
    useNewUrlParser: true
})
.then(() => {
    console.log('Database Connected Successfully')
})
.catch((err) => {
    console.log('Unable to connect with the database', err)
});

// Defining the PORT
const port = process.env.PORT || 8000;

// Initialize cors Middleware
app.use(cors());

// Initialize BodyParser Middleware
app.use(bodyParser.json());


// Initialize public directory
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

const employeeRoutes = require('./routes/apis/employee');

app.use('/api/employees', employeeRoutes);

app.listen(port, () => {
    console.log('server started on Port', port)
});