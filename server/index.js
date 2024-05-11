require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define routes here
app.get('/', (req, res) => {
    res.send('Welcome to the Library System!');
  });
  
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
