import React from 'react'

const Product = (props) => {
  return (

    

  <div className="col" style={{width :"275px", margin : "10px"}}>
   <div className="card">
   <img  src={props.image} className='product-image' width={"200px"} height={"200px"}  ></img>
      <div className="card-body">
       
        <h5 className="h6">{props.title} </h5>
        <p>{"FROM "}{props.category}</p>
        <p className="card-text">{props.price}</p>
        <div>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>({props.star})
        </div>
      </div>
   </div>
   </div>
 
  )
}

export default Product
