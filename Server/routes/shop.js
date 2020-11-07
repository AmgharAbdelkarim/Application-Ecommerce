const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const checkToken = require('../middlewares/auth')
const router = express.Router();


router.get('/' ,shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.post('/create-order',checkToken, shopController.postOrder)

router.get('/orders',checkToken, shopController.getOrders);

router.get('/checkout',checkToken, shopController.getCheckout);

module.exports = router;




