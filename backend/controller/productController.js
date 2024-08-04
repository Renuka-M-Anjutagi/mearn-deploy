import React from 'react';
import productModel  from '../models/productModel.js';
import shortid   from 'shortid';
import slugify from 'slugify';
export const addproduct = async(req, res) =>{

 // res.status(200).json({ file:req.files, body: req.body });

  const { name , price , description , category,quantity, createdBy } = req.body;

  let productPictures = [];

  if(req.files.length > 0){

    productPictures = req.files.map(file =>{
      return  { img: file.filename}
    })
  }
  const product = await new productModel({
    name:name,
    slug:slugify(name),
    price,
    description,
    productPictures,
    category,
    quantity,
    createdBy:req.user._id
  });

    product.save();
    res.status(201).send({
      success: true,
      message: 'product Added success',
      product
  })
    


}
