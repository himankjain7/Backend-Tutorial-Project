const Post = require('../models/Post');

// 1. Create a new post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    const newPost = await Post.create({
      name,
      description,
      age,
    });

    res.status(201).json({
      message: 'Post created successfully',
      post: newPost,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to create post',
      error: error.message,
    });
  }
};

// 2. Retrieve all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: 'Failed to retrieve posts',
      error: error.message,
    });
  }
};

// 3. Update a post by ID
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({
      message: 'Post updated successfully',
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to update post',
      error: error.message,
    });
  }
};

// 4. Delete a post by ID
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(id);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({
      message: 'Post deleted successfully',
    });
  } catch (error) {
    res.status(400).json({
      message: 'Failed to delete post',
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
  updatePost,
  deletePost,
};
