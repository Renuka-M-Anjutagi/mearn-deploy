import express from 'express';
import {registerController, logoutController ,loginController, testController,dashboradController,forgotPassword,resetPassword} from "../controller/authController.js";
import {requireSignIn, isAdmin} from '../middleware/authMiddleware.js';
import { categoryCOntroller , getCategories } from '../controller/categoryCOntroller.js';



 const router = express.Router();
 
 router.post('/register', registerController);
 router.post('/login', loginController);
 router.post('/logout', logoutController);
 router.post('/dashborad', dashboradController);

 router.get('/test' ,requireSignIn , isAdmin,   testController);
 router.post('/login/reset',forgotPassword);
 router.get('/login/reset-password/:id/:token',resetPassword);

 router.post('/category',requireSignIn,isAdmin,categoryCOntroller);
 router.get('/category/all',getCategories);







 export default router;
