const Sequelize = require('sequelize');
const client = require('../database');

class Product extends Sequelize.model {



};

Product.init({
    name: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: true,
        }
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: true,
        }
    },
    image: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: true,
        }
    },
    size: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: false,
        }
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validates: {
            notEmpty: true,
        }
    },
    mark: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: false,
        }
    },
    status: {
        type: Sequelize.TEXT,
        allowNull: false,
        validates: {
            notEmpty: true,
        }
    },
}, {
    sequelize: client,
    tableName: "product",
    underscored: true
});

module.exports = Product;
