const express = require('express');
const router = express.Router();

const {
  createPost,
  getPosts,
  updatePost,
  deletePost,
} = require('../controllers/postController');

// Route to create a new post
router.post('/create', createPost);

// Route to retrieve all posts
router.get('/', getPosts);

// Route to update a post by ID
router.put('/update/:id', updatePost);

// Route to delete a post by ID
router.delete('/delete/:id', deletePost);

module.exports = router;
