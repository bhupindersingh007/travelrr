const fs = require('fs')
const Post = require('../models/Post');
const { deleteFile } = require('../helper')

const index = async (req, res) => {
    

    const { page = 1, limit = 5 } = req.query

    let search = req.query.search ?? ''

    let count = await Post.count()


    const posts = await Post.find({ title: { $regex: search, $options: 'i' } })
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({ posted_at : 'desc' })
        .exec()


    res.render('posts/index', {
        posts: posts,
        search: search, 
        totalPages: Math.ceil(count / limit),
        currentPage: page,
    })
}


const create = (req, res) => {

    res.render('posts/create')

}

const store = async (req, res) => {

    await Post.create({
        title: req.body.title,
        excerpt: req.body.excerpt,
        content: req.body.content,
        thumbnail: req.file.filename,
        posted_at: new Date().toISOString()
    })

    req.session.success = 'Post Created'

    res.redirect('/posts/create')

}


const show = async (req, res) => {

    const post = await Post.findById(req.params.postId).catch(() => res.redirect('/'))

    res.render('posts/show', { post })
}


const edit = async (req, res) => {

    const post = await Post.findById(req.params.postId).catch(() => res.redirect('/'))

    res.render('posts/edit', { post })
}


const update = async (req, res) => {

    const post = await Post.findById(req.params.postId).catch(() => res.redirect('/'))
    
    let data = {
        title: req.body.title,
        excerpt: req.body.excerpt,
        content: req.body.content
    }
    
    if(req.file){

        deleteFile(post.thumbnail)
    
        data.thumbnail = req.file.filename   

    }

    await Post.findByIdAndUpdate(req.params.postId, data).catch(() => res.redirect('/'))


    req.session.success = 'Post Updated'

    res.redirect(`/posts/${req.params.postId}/edit`)

}


const destroy = async (req, res) => {

    const post = await Post.findById(req.params.postId).catch(() => res.redirect('/'))
    
    deleteFile(post.thumbnail)

    await Post.findByIdAndDelete(req.params.postId).catch(() => res.redirect('/'))

    req.session.success = 'Post Deleted'

    res.redirect('/')

}


module.exports = { index, create, store, show, edit, update, destroy };