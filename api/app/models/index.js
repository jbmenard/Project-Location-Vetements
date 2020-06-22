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
// User.hasMany(Comment, {
//     foreignKey: "user_id",
//     as: "comments"
// });

// Comment.belongsTo(User, {
//     foreignKey: "user_id",
//     as: "user"
// });

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