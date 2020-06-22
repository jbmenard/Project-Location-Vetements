const Sequelize = require('sequelize');
const client = require('../database');

class Comment extends Sequelize.Model {



};

Comment.init({
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    app_user_id: {
        type : Sequelize.INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    product_id: {
        type : Sequelize.INTEGER,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },
    
}, {
    sequelize: client,
    tableName: "comment",
    underscored: true
});

module.exports = Comment;

