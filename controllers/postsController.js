const Post = require('../models/Post')

module.exports = {
    createPost: async (req,res) => {
        const post = await Post.create( {
            postTitle: req.body.title,
            postContent: req.body.content,
            postImage: req.body.image,
            userID: req.body.user
        })
            .then(post => res.json(post))
            .catch(err => res.json(err.errors))
    },
    getOnePost: async (req,res) => {
        const post = await Post.findOne({
            where: {
                id: req.params['post']
            }
        })
            .then(post => res.json(post))
    },
    getAllPostsFromOneUser: async (req,res) => {

    },
    getAllPostsFromAllUsers: async (req,res) => {
        const posts = await Post.findAll()
        res.json(posts)
    },
    getExplorePosts: async (req,res) => {

    },
    updatePost: async (req,res) => {

    },
    deletePost: async (req,res) => {

    }

}