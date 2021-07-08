const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
//const { post } = require('../controllers/home-routes');

class Post extends Model {}


Post.init(
    {
        title:DataTypes.STRING,
        body:DataTypes.STRING
    },
    {sequelize}
);

module.exports = Post;