const express = require('express');
const router = express.Router();

const userController = require('./controllers/userController');
const userInfoController = require('./controllers/userInfoController');
const categoryController = require('./controllers/categoryController');
const genderController = require('./controllers/genderController');
const productController = require('./controllers/productController');
const subCategoryController = require('./controllers/subCategoryController');
const commentController = require ('./controllers/commentController');


router.get('/user', userController.getAll);
router.get('/user/:id', userController.getOne );
router.post('/user', userController.create);
router.patch('/user/:id', userController.update);
router.delete('/user/:id', userController.delete);

router.get('/userinfo', userInfoController.getAll);
router.get('/userinfo/:userInfosId', userInfoController.getOne );
router.post('/userinfo', userInfoController.create);
router.patch('/userinfo/:userInfosId', userInfoController.update);
router.delete('/userinfo/:userInfosId', userInfoController.delete);

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
router.post('/product', productController.create);
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