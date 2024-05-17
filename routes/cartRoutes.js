

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/addToCart', cartController.addToCart);


router.get('/cartItems', cartController.getCartItems);

router.delete('/delete/:id', cartController.deleteCartItem);

module.exports = router;
