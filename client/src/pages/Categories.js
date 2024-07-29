
import { categoryModel } from '../../../backend/models/categoryModel';

export const Categories  = async (req, res) =>
  {
      try {
          const category = await categoryModel.find({});
          console.log(category, 'data');
          res.status(200).send({
            success: true,
            message: 'Category find',
            category
          })
         
      } catch (error) {
          console.log(error, 'error');
          res.status(401).send({
              success: false,
              message: 'Error in Admin Middleware'
          })
      }
  }
  
