const express = require('express');
const router = express.Router();
const User = require('../models/users'); // Adjust the path to your User model

router.post('/add-to-cart', async (req, res) => {
  const { userId, bookId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    user.cart.push(bookId);
    await user.save();

    res.json({ message: 'Book added to cart' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
