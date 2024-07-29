const express = require(" express");
const router  = express.Router();

router.get('/category/all',getCategories);
router.post('/subcategory',subcategoryController);
router.post('/subcategory/:id',getSubCategories);

router.get('/category',categoryCOntroller);
module.exports =router;