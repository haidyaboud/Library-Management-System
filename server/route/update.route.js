// updatebook.route.js
const express = require('express');
const router = express.Router();
const bookModel = require('../models/books');

router.put('/update/:id', async (req, res) => {
    const bookId = req.params.id;
    const newData = req.body;
    if (!bookId) {
      return res.status(400).json({ message: 'Book ID is undefined' });
    }
    try {
      const updatedBook = await bookModel.findByIdAndUpdate(bookId, newData, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating book', error });
    }
});

module.exports = router;
