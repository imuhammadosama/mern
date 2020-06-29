const express = require('express');
const router = express.Router();

//GETTING GENERAL POSTS
router.get('/', (req, res) => {
  res.send('General Posts');
});

module.exports = router;
