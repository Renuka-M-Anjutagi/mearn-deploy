import  CartModel  from '../models/cart.js';

export const addItemToCart = async(req , res) =>{

    try{

        
        CartModel.findOne({ user: req.user._id})
        .exec((error, cart) => {
            if(error) return res.status(400).json({ error });
            if(cart){
                // if cart already exits then update the cart by quantity
               // res.status(200).json({ message : cart });

               CartModel.findOneAndUpdate({ user: req.user._id},{
                "$push" :{
                    "cartItems":req.body.cartItems
                }
               }).exec((error,_cart) =>{     

                if(error) return res.status(400).json({ error });
                if(_cart){
                    return res.status(201).json({ cart : _cart});
                }
               })
            }else{

                // if cart not exit then add to cart
                const cart = new CartModel({
                    user: req.user._id,
                    cartItems:[req.body.cartItems]
                });
            
                cart.save();
                res.status(201).send({
                    success: true,
                    message: 'Item Added success',
                    cart
                });
            }
        })
       

    }catch(error){

        console.log(error);
    }
    
};