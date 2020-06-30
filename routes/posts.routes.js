const express = require('express');
const router = express.Router();

//ImPORTING THE MODEL
const Posts = require('../models/posts.models');

//GETTING GENERAL POSTS
router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

//POSTING THE POST
router.post('/', async (req, res) => {
  const post = new Posts({
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
