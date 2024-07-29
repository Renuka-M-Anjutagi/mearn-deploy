import express from 'express';
import {requireSignIn, isAdmin} from '../middleware/authMiddleware.js';
import { addproduct } from '../controller/productController.js'
const proRoute = express.Router();
import  multer  from 'multer';
const upload = multer({ dest : './uploads/'})
//import { Product } from '../models/productModel.js';
//import { productModel } from '../models/productModel.js';


proRoute.post('/product/create',requireSignIn,isAdmin,upload.single('productPicture'),addproduct);

module.export = proRoute;