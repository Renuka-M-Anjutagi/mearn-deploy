import express from "express";
import { requireSignIn} from '../middleware/authMiddleware.js';
import { addItemToCart } from '../controller/cartController.js';


const cartRoute = express.Router();

cartRoute.post('/user/cart/addtocart', requireSignIn ,addItemToCart);

export default cartRoute;