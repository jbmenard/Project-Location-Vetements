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
            if(products.length){
                return res.send(products);
            }
            res.status(404).send({
                error: "Aucun produit ne correspond"
            })

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
            const form = new formidable.IncomingForm({multiples: true}); 
            await new Promise((resolve, reject) => {
                form.parse(req, async (err, fields, files) => { 
                    if(files.image){
                        console.log("back", files.image)
                        const oldPath = files.image.path; 
                        const newPath = '/var/www/html/Project-Location-Vetements/front/public' 
                        + '/'+files.image.name 
                        const rawData = fs.readFileSync(oldPath) 
                        fs.writeFile(newPath, rawData, (err) => { 
                            if(err) console.log(err) 
                        }) 
                        
                        const newProduct = await Product.create({
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
                   return res.send(newProduct)

                }
                    

                    const newProduct = await Product.create({
                        id: Number(fields.id),
                        name: fields.name,
                        description: fields.description,
                        gender_id: Number(fields.gender_id),
                        size: fields.size,
                        price: fields.price,
                        mark: fields.mark,
                        status: fields.status,
                        app_user_id: Number(fields.app_user_id),
                        sub_category_id: Number(fields.sub_category_id),
                    });
                    return res.send(newProduct)
                })
                
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
               
               const form = new formidable.IncomingForm({multiples: true}); 
               await new Promise((resolve, reject) => {
                   form.parse(req, async (err, fields, files) => { 
                       if(files.image){
                           const oldPath = files.image.path; 
                           const newPath = '/var/www/html/Dragons/APO/Project-Location-Vetements/front/public' 
                           + '/'+files.image.name 
                           const rawData = fs.readFileSync(oldPath) 
                           fs.writeFile(newPath, rawData, (err) => { 
                               if(err) console.log(err) 
                            }) 
                            
                            await targetProduct.update({
                                name: fields.name,
                                description: fields.description,
                                gender_id: Number(fields.gender_id),
                                image: `/${files.image.name}`,
                                size: fields.size,
                                price: fields.price,
                                mark: fields.mark,
                                status: fields.status,
                                sub_category_id: Number(fields.sub_category_id),
                            });
                            return res.send(targetProduct)
                            
                        }
                        
                        
                        await targetProduct.update({
                            name: fields.name,
                            description: fields.description,
                            gender_id: Number(fields.gender_id),
                            size: fields.size,
                            price: fields.price,
                            mark: fields.mark,
                            status: fields.status,
                            sub_category_id: Number(fields.sub_category_id),
                        });
                        return res.send(targetProduct)
                    })
                    
                })
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
                await targetProduct.destroy();
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