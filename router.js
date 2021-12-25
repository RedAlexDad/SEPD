const Router = require('express');
const Post = require('./Post.js');

const router = new Router();

router.post('/posts', async (request, response) => {
    try {
        const {author, title, content, picture} = request.body;
        const post= await Post.create({author, title, content, picture});
        response.json(post);
    } catch (e) {
        response.status(500).json(e)
    }
    
})
router.get('/posts')
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')

module.exports = router;