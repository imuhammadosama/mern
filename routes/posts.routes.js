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

//GETTING SPECIFIC POST
router.get('/:postId', async (req, res) => {
  console.log(req.params.postId);
  try {
    const post = await Posts.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

//SUMBITTING A POST
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

//UPDATING A POST
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Posts.updateOne(
      { _id: req.params.postId },
      {
        $set: { title: req.body.title, description: req.body.description },
      }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETING A POST
router.delete('/:postId', async (req, res) => {
  try {
    const deletedPost = await Posts.deleteOne({ _id: req.body.postId });
    res.json(deletedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
