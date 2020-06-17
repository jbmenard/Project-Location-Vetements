const User = require('./user');
const Product = require('./product');
const Category = require('./category');
const Gender = require('./gender');
const Comment = require('./comment');
const SubCategory = require('./sub_category');
const UserInfo = require('./user_info');

// User <-> Product
User.hasMany(Product, {
    foreignKey: "user_id",
    as: "products"
});

Product.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// Gender <-> Product
Gender.hasMany(Product, {
    foreignKey: "gender_id",
    as: "products"
});

Product.belongsTo(Gender, {
    foreignKey: "gender_id",
    as: "gender"
});

// Sub_category <-> Product
SubCategory.hasMany(Product, {
    foreignKey: "sub_category_id",
    as: "products"
});

Product.belongsTo(SubCategory, {
    foreignKey: "sub_category_id",
    as: "sub_category"
})

// Category <-> SubCategory
Category.hasMany(SubCategory, {
    foreignKey: "category_id",
    as: "sub_categories"
});

SubCategory.belongsTo(Category, {
    foreignKey: "category_id",
    as: "category"
})

// User <-> Comment
User.hasMany(Comment, {
    foreignKey: "user_id",
    as: "comments"
});

Comment.belongsTo(User, {
    foreignKey: "user_id",
    as: "user"
});

// User <-> UserInfo
User.hasOne(UserInfo);

UserInfo.belongsTo(User);