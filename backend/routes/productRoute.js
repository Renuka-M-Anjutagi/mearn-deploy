import express from 'express'
import {requireSignIn, isAdmin} from '../middleware/authMiddleware.js';
import { addproduct } from '../controller/productController.js';
const router  = express.Router();
import  multer  from 'multer';
import shortid  from 'shortid';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); 
const folder = "./uploads/"
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null,path.join(path.dirname(__dirname), folder))
        },
        filename: function (req, file, cb) {

          cb(null, shortid.generate() + '-' + file.originalname);
        }
      })
const upload = multer({storage:storage})


router.post('/product/create',requireSignIn,isAdmin,upload.array('productPicture'), addproduct);


 export default router;