const Product = require('../models/Product');



const addProduct = async (req, res) => {
    const { name, category, image, description, price } = req.body;
    try {
        const newProduct = await Product.create({
            name,
            category,
            image,
            description,
            price
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getProduct = async(req,res)=>{
    try{
        const products = await Product.findAll();

        res.status(201).json(products);
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports ={
    addProduct,
    getProduct
}