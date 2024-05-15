//books.route.js
const express = require('express');
const router = express.Router();
const bookModel = require("../models/books");

// POST route to add a new book
router.post('/add', async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookModel(data);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add new book' });
  }
});

// GET route to fetch all books
router.get('/displaybooks', async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error fetching books' });
  }
});

module.exports = router;
