const express = require('express');
const router = express.Router();

const authController = require('./controllers/authController');
const appUserController = require('./controllers/appUserController');
const appUserInfoController = require('./controllers/appUserInfoController');
const categoryController = require('./controllers/categoryController');
const genderController = require('./controllers/genderController');
const productController = require('./controllers/productController');
const subCategoryController = require('./controllers/subCategoryController');
const commentController = require ('./controllers/commentController');
const isConnect = require ('./middleware/isConnect')

router.get('/user', appUserController.getAll);
router.get('/user/:id', appUserController.getOne );
router.post('/user', authController.signupAction);
router.patch('/user/:id', appUserController.update);
router.delete('/user/:id', appUserController.delete);

router.post('/signin', authController.loginAction);
router.get('/logout', authController.logout);

router.get('/userinfo', appUserInfoController.getAll);
router.get('/userinfo/:id', appUserInfoController.getOne );
router.post('/userinfo', appUserInfoController.create);
router.patch('/userinfo/:id', appUserInfoController.update);
router.delete('/userinfo/:id', appUserInfoController.delete);

router.get('/category', categoryController.getAll);
router.get('/category/:Id', categoryController.getOne );
router.post('/category', categoryController.create);
router.patch('/category/:Id', categoryController.update);
router.delete('/category/:Id', categoryController.delete);

router.get('/gender', genderController.getAll);
router.get('/gender/:id', genderController.getOne );
router.post('/gender', genderController.create);
router.patch('/gender/:id', genderController.update);
router.delete('/gender/:id', genderController.delete);

router.get('/product', productController.getAll);
router.get('/product/:id', productController.getOne );
router.post('/product', isConnect, productController.create);
router.patch('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

router.get('/sub_category', subCategoryController.getAll);
router.get('/sub_category/:id', subCategoryController.getOne );
router.post('/sub_category', subCategoryController.create);
router.patch('/sub_category/:id', subCategoryController.update);
router.delete('/sub_category/:id', subCategoryController.delete);

router.get('/comment', commentController.getAll);
router.get('/comment/:id', commentController.getOne );
router.post('/comment', commentController.create);
router.patch('/comment/:id', commentController.update);
router.delete('/comment/:id', commentController.delete);

router.use( (req, res) => {
    res.status(404).send("not found");
});

module.exports = router;