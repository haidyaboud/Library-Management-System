const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users'); // Adjust the path to your User model

router.post('/signin', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ username, email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
