const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
   title: { type: String, required: true },
   excerpt: { type: String, required: true },
   content: { type: String, required: true },
   thumbnail: { type: String, required: true },
   tags: { type: [String], required: true },
   posted_at: { type: Date, required: true }
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;
