const express = require(" express");
import {requireSignIn, isAdmin} from '../middleware/authMiddleware.js';
import {productController} from '../controller/productController.js'
const router  = express.Router();
const Product = require('../models/productModel.js');


router.post('/product/create',requireSignIn,isAdmin,(req, res) =>{

        res.status(200).json({ 'message':'Hello'});
});


//router.get('/product/getProduct',productController);
module.exports = router;