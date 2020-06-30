const express = require('express');
const router = express.Router();

//IMPORTING THE MODEL
const Users = require('../models/users.models');

//GETTING ALL THE USERS
router.get('/', async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (error) {
    res.json({ message: error });
  }
});

//POSTING THE USER
router.post('/', async (req, res) => {
  const user = new Users({
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
