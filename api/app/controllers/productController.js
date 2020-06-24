const {Product} = require('../models');
const formidable = require ('formidable');
const fs = require('fs'); 
const path = require('path') 

const productController = {
    getAll : async (req, res, next) => {
        try {
            const productName = req.params.product;
            const products = await Product.findAll({
                where: {
                    name: productName,
                },
                include: [{all: true, nested: true}]
            });

            res.send(products);
        } catch(error) {
            console.trace(error);
            res.status(500).send(error);
        }
    },

    getOne : async (req,res,next) => {
        try {
            const productId = req.params.id;
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
            console.log("oui")
            const form = new formidable.IncomingForm({multiples: true}); 
            await new Promise((resolve, reject) => {
                form.parse(req, (err, fields, files) => { 
                    console.log(files.image.path);
                    
                    const oldPath = files.image.path; 
                    const newPath = '/var/www/html/Project-Location-Vetements/front/public' 
                        + '/'+files.image.name 
                    const rawData = fs.readFileSync(oldPath) 
                    fs.writeFile(newPath, rawData, (err) => { 
                        if(err) console.log(err) 
                    }) 
                    

                    const newProduct = Product.create({
                        id: Number(fields.id),
                        name: fields.name,
                        description: fields.description,
                        gender_id: Number(fields.gender_id),
                        image: `/${files.image.name}`,
                        size: fields.size,
                        price: fields.price,
                        mark: fields.mark,
                        status: fields.status,
                        app_user_id: Number(fields.app_user_id),
                        sub_category_id: Number(fields.sub_category_id),
                    });
                    res.send(newProduct)
                })
                // console.log(req);
                
            })
              

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