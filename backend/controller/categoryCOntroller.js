
import categoryModel from '../models/categoryModel.js';
import subcategoryModel from '../models/subcategoryModel.js';
import axios from 'axios';
import slugify  from 'slugify';
//import Menu from '../../client/src/components/layout/Menu.js';


function createCategories(categories,parentId  = null){

    const categoryList = [];
    let category;
    if(parentId == null)
    {
        category = categories.filter(cat => cat.parentId == undefined);    
    }else{
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for(let cate of category)
    {
        categoryList.push({
            _id:cate._id,
            name:cate.name,
            slug:cate.slug,
            children: createCategories(categories, cate._id),
        });
    }
    return categoryList;
};

export const categoryCOntroller = async(req , res ) => {

    try {
         //const {name} = req.body.name;

        const categoryObject = {
            name:req.body.name,
            slug:slugify(req.body.name)
        }
        
        if(req.body.parentId)
        {
            categoryObject.parentId = req.body.parentId;
        }
      
        const category = await new categoryModel({name:req.body.name,
            slug:slugify(req.body.name),parentId:req.body.parentId
            }).save();
        res.status(201).send({
            success: true,
            message: 'Category Added success',
            category
        })
            
        
    } catch (error) {
        
        console.log(error);
    }
 
}


// category



export const subcategoryController = async(req , res) =>{

    try{
        const {subname,categoryID} = req.body;
        if(!subname) return res.send({error:' Name is Missing'});
        if(!categoryID) return res.send({error:'Category ID is Missing'});
        const existingcategory = await subcategoryModel.findOne({subname});
        if(existingcategory) 
        {
          return res.status(200).send(
             {
                 success: false,
                 message: 'Already existingcategory'
     
             }
          )
        }
        const category = await new subcategoryModel({subname,categoryID}).save();
        res.status(201).send({
         success: true,
         message: 'Sub Category Added success',
         category
        })
             

    }catch{
        ////console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Adding Sub category',
            error
        })
    }
}
export const getCategories  = async (req, res) =>
    {
        try {
          
            const categories = await categoryModel.find({});
             // enter you logic when the fetch is successful
                console.log(`data: `, categories);
                if(categories){

                    const categoryList = createCategories(categories);
                    
                    res.status(200).send({
                        success: true,
                        message: 'Category List',
                        categoryList
                    })

                        return categoryList;
                }
                
            
            
        } catch (error) {
            console.log(error);
            res.send({error})
        }
      
    }

//export default categoryCOntroller
