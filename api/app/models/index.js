const AppUser = require('./app_user');
const Product = require('./product');
const Category = require('./category');
const Gender = require('./gender');
const Comment = require('./comment');
const SubCategory = require('./sub_category');
const AppUserInfo = require('./app_user_info');

// User <-> Product
AppUser.hasMany(Product, {
foreignKey: "app_user_id",
as: "products"
});

Product.belongsTo(AppUser, {
foreignKey: "app_user_id",
as: "owner"
});

// Gender <-> Product
Gender.hasMany(Product, {
foreignKey: "gender_id",
as: "genderProducts"
});

Product.belongsTo(Gender, {
foreignKey: "gender_id",
as: "gender"
});

// Sub_category <-> Product
SubCategory.hasMany(Product, {
foreignKey: "sub_category_id",
as: "productsSubCategories"
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
AppUser.hasMany(Comment, {
    foreignKey: "app_user_id",
    as: "comments"
});

Comment.belongsTo(AppUser, {
    foreignKey: "app_user_id",
    as: "app_user"
});

// Product <-> Comment
Product.hasMany(Comment, {
    foreignKey: "product_id",
    as: "comments",
    onDelete: "cascade"
});

Comment.belongsTo(Product, {
    foreignKey: "product_id",
    as: "product",
    onDelete: "cascade"
});

// User <-> UserInfo
AppUser.hasOne(AppUserInfo);

AppUserInfo.belongsTo(AppUser);

module.exports = {
Product,
Comment,
AppUser,
AppUserInfo,
SubCategory,
Category,
Gender,
}

