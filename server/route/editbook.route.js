const express = require('express');
const router = express.Router();
const Book = require('../models/books'); // Replace with your actual book model

// Route to update an existing book
router.put('/books/update/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Error updating book' });
  }
});

// Route to get all books
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books' });
  }
});

module.exports = router;
