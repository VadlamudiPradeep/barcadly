

const Cart = require('../models/Cart');

const addToCart = async (req, res) => {
    const {  image,name, description, price } = req.body;
    console.log("price :" , price)
    console.log("description ", description )
    try {
        const newItem = await Cart.create({ image,name, description, price });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.findAll();
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCartItem = async (req, res) => {
    const itemId = req.params.id;
    try {
        const deletedItem = await Cart.destroy({ where: { id: itemId } });
        if (deletedItem) {
            res.status(200).json({ message: 'Item deleted successfully' });
        } else {
            res.status(404).json({ error: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    addToCart,
    getCartItems,
    deleteCartItem
};
