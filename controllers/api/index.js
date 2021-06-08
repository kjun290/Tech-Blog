const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use.apply('/user', userRoutes);
router.use.apply('/post', postRoutes);
router.use.apply('/comment', commentRoutes);

module.exports = router;
