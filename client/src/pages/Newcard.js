import React from 'react';
 
const Newcard = (props) => {



  return (

   <div className="row row-cols-1 row-cols-md-4 g-4">
   <div className="col" >
     <div className="card">
     <img className='product-image' src={props.image}></img>
       <div className="card-body">
       
         <h5 className="h6">{props.title}</h5>
         <p className="card-text">{props.price}</p>
         <div> 
          <span className="fa fa-star checked"> </span>
          <span className="fa fa-star checked"> </span>
          <span className="fa fa-star checked"> </span>
          <span className="fa fa-star"> </span>
          <span className="fa fa-star"> </span>({props.star})
      </div>
       </div>
    </div>
 </div>
   <div className="col">
   <div className="card">
   <img className='product-image'  src={props.image}></img>
      <div className="card-body">
      
        <h5 className="h6">{props.title}</h5>
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
   <div className="col">
   <div className="card">
   <img className='product-image' src={props.image}></img>
      <div className="card-body">
      
        <h5 className="h6">{props.title}</h5>
        <p className="card-text">{props.price}</p>
        <div>
          <span className="fa fa-star checked" value="{props.star}"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>({props.star})
        </div>
      </div>
   </div>
   </div>
   <div className="col">
   <div className="card">
   <img className='product-image' src={props.image}></img>
      <div className="card-body">
      
        <h5 className="h6">{props.title}</h5>
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
  
    <div className="outer" style={{alignContent:"center"}}>
      <div className="button">
          <div className="text">SHOW MORE</div>
      </div>
    </div>
   
 </div>
  
  )
}

export default Newcard;
