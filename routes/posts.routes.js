const express = require('express');
const router = express.Router();

//ImPORTING THE MODEL
const Post = require('../models/posts.models');

//GETTING GENERAL POSTS
router.get('/', (req, res) => {
  res.send('General Posts');
});

//POSTING THE POST
router.post('/', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
