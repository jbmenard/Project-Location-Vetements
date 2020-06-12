const Sequelize = require('sequelize');
const client = require('../database');

class UserInfo extends Sequelize.Model {


};

UserInfo.init({
    first_name : {
        type : Sequelize.TEXT,
        allowNull : false,
        validates : {
            notEmpty : true
        }
    },
    last_name : {
        type : Sequelize.TEXT,
        allowNull : true,
        validates : {
            notEmpty : false
        }
    },
    address : {
        type : Sequelize.TEXT,
        allowNull : true,
        validates : {
            notEmpty : false
        }
    },
    mobile : {
        type : Sequelize.TEXT,
        allowNull : true,
        validates : {
            notEmpty : false
        }
    },
    avatar : {
        type : Sequelize.TEXT,
        allowNull : true,
        validates : {
            notEmpty : false
        }
    },
    certified : {
        type : Sequelize.BOOLEAN,
        allowNull : false,  
        validates : {
            notEmpty : true  
        }
    },
    role : {
        type : Sequelize.TEXT,
        allowNull : false,
        validates : {
            notEmpty : true
        }
    }
},{
    sequelize: client,
    tableName: "user_info",
    underscored : true,
});

module.exports = UserInfo;