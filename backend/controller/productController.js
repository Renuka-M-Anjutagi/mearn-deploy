import React from 'react';
import productModel  from '../models/productModel.js';
import shortid   from 'shortid';
import slugify from 'slugify';
export const addproduct = (req, res) =>{

 // res.status(200).json({ file:req.files, body: req.body });

  const { name , price , description , category, createBy } = req.body;

  let productPictures = [];

  if(req.files.length>0){

    productPictures = req.files.map(file =>{
      return  { img: file.filename}
    })
  }
  const product = new productModel({
    name:req.body.name,
    slug:slugify(name),
    price:req.body.price,
    description:req.body.description,
    productPictures:productPictures,
    category:req.body.category,
    createBy:req.body.user._id
  });

  product.save(
    ((error, product) =>{
      if(error) return res.status(400).json({error});
      if(product){
        res.status(201).json({ product })
      }
    }));


}
