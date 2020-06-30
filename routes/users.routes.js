const express = require('express');
const router = express.Router();

const User = require('../models/users.models');

//POSTING THE USER
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
