const Sequelize = require('sequelize');
const client = require('../database');

class Comment extends Sequelize.model {



};

Comment.init({
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: true,
        }
    },
    
}, {
    sequelize: client,
    tableName: "comment",
    underscored: true
});

module.exports = Comment;

