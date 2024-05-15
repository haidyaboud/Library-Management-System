//index.js 
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//const editBookRouter = require('./routes/editbook.route');
const DisplaybookRoutes = require('./route/displaybooks.route');
const booksRouter = require('./route/books.route'); // Adjust the path as necessary



const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));



app.use('/api/displaybooks', DisplaybookRoutes);
app.use('/api', booksRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Library System!');
});
app.get('/services', (req, res) => {
    res.send('Service page!');
});
app.get('/about', (req, res) => {
    res.send('About page!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));