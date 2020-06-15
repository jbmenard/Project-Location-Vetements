const Product = require('../models/product');

const productController = {
    getAll : async (req, res, next) => {
        try {
            const products = await Product.findAll({
                include : [{ all: true , nested: true}]
            });

            res.send(products);
        } catch(error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne : async (req,res,next) => {
        try {
            const productId = red.params.id;
            const product = await Product.findByPk(productId,{
                include : [{all:true, nested:true}]
            });

            if (product) {
                return res.send(product);
            }
            next();
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    create : async (req, res, next) => {
        try{
            const newProduct = await Product.create(req.body);
            res.send(newProduct)
        } catch (error) {
            console.trace(error);
            res.status(500).send(error)
        }
    },

    update : async (req, res, next) => {
        try{
           const productId = req.params.id;
           const targetProduct = await Product.findByPk(productId);
           if(targetProduct){
               await tragetProduct.update(req.body);
               res.send(targetProduct);
           }
           else {
               next();
           }
        } catch (error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    delete : async(req, res, next) =>{
        try{
            const productId = req.params.id;
            const targetProduct = await Product.findByPk(productId);
            if(targetProduct){
                await targetUser.destroy();
                res.send("ok");
            }else{
                next();
            }
        }catch (error){
            console.trace(error);
            res.status(500).send(error);
        }
    }
};

module.exports = productController;