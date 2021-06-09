const router = require("express").Router();
const {post, comment, user} = require('../models');


// get all posts for the homepage
router.get('/', (req, res) => {
    post.findAll({
        include: [User],
    })
    .then((dbPostData) => {
        const posts = dbPostData.map((post) => post.get({ plain: true}));

        res.render("all-posts", {posts});
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});

// get a single post 
router.get('/post/:id', (req,res) => {
    post.findByPk(req.params.id, {
        include: [
            User,
            {model: Comment, 
            include: [User],},
        ],
    })
    .then((dbPostData) => {
        if(dbPostData) {
            const post = dbPostData.get({plain:true});
            res.render('single-post', {post});
        }
        else {
            res.status(404).end();
        };
    })
    .catch((err) => {
        res.status(500).json(err);
    });
});


router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;