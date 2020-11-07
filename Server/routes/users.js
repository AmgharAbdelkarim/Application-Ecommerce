const path = require('path');

const express = require('express');

const shopController = require('../controllers/user');

const router = express.Router();

router.post('/signUp', shopController.subscribe);

router.post('/login', shopController.login);

router.get('/getUserWithToken', shopController.getUserWithToken);
module.exports = router;




