// index.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DisplaybookRoutes = require('./route/displaybooks.route');
const booksRouter = require('./route/books.route');
const updateBookRouter = require('./route/update.route');
const deleteBookRouter = require('./route/deletebook.route'); // Import the delete route

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api/displaybooks', DisplaybookRoutes);
app.use('/api', booksRouter);
app.use('/api', updateBookRouter);
app.use('/api', deleteBookRouter); // Use the delete route

app.get('/', (req, res) => {
    res.send('Welcome to the Library System!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
