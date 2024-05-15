//Dispaly books route 
const express = require('express');
const router = express.Router();
const Book = require('../models/books'); // Replace with your actual book model

// Route to get all books
router.get('/displaybooks', async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

module.exports = router;
