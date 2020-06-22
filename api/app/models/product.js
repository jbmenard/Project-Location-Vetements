const Sequelize = require('sequelize');
const client = require('../database');

class Product extends Sequelize.Model {



};

Product.init({
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: true,
        validate: {
            notEmpty: true,
        }
    },
    size: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: false,
        }
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    mark: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: false,
        }
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    app_user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }, 
    gender_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }, 
    sub_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    }, 
}, {
    sequelize: client,
    tableName: "product",
    underscored: true
});

module.exports = Product;
