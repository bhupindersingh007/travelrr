const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const isAuthenticated = require('../middlewares/isAuthenticated')
const validatePost = require('../middlewares/validatePost')
const { upload } = require('../helper')

router.get('/', PostController.index);

router.get('/posts/create', isAuthenticated, PostController.create)

router.post('/posts', [upload.single('thumbnail'), validatePost, isAuthenticated], PostController.store)

router.get('/posts/:postId', PostController.show)

router.get('/posts/:postId/edit', isAuthenticated, PostController.edit)

router.put('/posts/:postId', [upload.single('thumbnail'), validatePost, isAuthenticated], PostController.update)

router.delete('/posts/:postId', isAuthenticated, PostController.destroy)

module.exports = router