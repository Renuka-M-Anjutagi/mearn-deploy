import React from 'react';
import '../pages/product.css';
import '../pages/pro.css';

import { FaBorderAll } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaGripLines } from 'react-icons/fa';

import DisplayAllproducts from './DisplayAllproducts.js';

const DisplayProducts = () => {
  return (
    <>
<div className="container" style={{ border: "1px solid lightgray",height:"50px"}}>
  
  <div className="row">
    <div className="col" style={{marginTop:"-41px"}}>
 <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
     <FaBorderAll id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" width={"600px"} height={"200px"} style={{margin:"10px"}} />
  </li>
  <li className="nav-item" role="presentation">
     <FaTable  id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" width={"600px"} height={"200px"} style={{margin:"10px"}}  />
  </li>
  <li className="nav-item" role="presentation">
     <FaGripLines   id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" width={"600px"} height={"200px"} style={{margin:"10px"}}  />
  </li>
</ul>
    
    </div>
    <div className="col" style={{marginTop:"15px"}}>
       <p className='h1'>Products</p>
    </div>
    <div className="col">
  
<select name="sort" className="category">  
    <option value="Featured">SORT BY</option>   
    <option value="Featured">Featured</option>
    <option value="bestselling">Best Selling</option>
    <option value="Alphabetically,A - Z">Alphabetically,A - Z</option>
    <option value="Alphabetically,Z - A">Alphabetically,Z - A</option>
    <option value="Price,low to high">Price,low to high</option>
    <option value="Price,high to low">Price,high to low</option>
    <option value="Date of old to new">Date of old to new</option>
    <option value="Price,new to old">Date of new to old</option>
</select>
    </div>
  </div>
</div>
<div className="d-flex align-items-start" style={{marginLeft:"5.5rem"}}>
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" style={{width:"300px",padding:"50px"}} role="tablist" aria-orientation="vertical">
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">COLOR
      
   
  
    </button>

  
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">SUBJECT</button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">SHAPE</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <DisplayAllproducts />
    </div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Table</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">row</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>



    </>
    
  )
}

export default DisplayProducts
