import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

import Menu from './Menu';
import AllCategory from './category/AllCategory';

const Header = () => { 
  return (
  <>
 
 <div className="container" style={{maxWidth:"none"}}>
  <div className="row">
   <div style={{backgroundColor:"black",color:"white",width:"100% !important",fontSize:"13px",padding:"15px"}}>
   <div className="col-md-6 offset-md-4">
    <p className="prose heading is-selected" style={{textAlign:"justify"}}>25% OFF &amp; 2 OR MORE GET 35% OFF &amp; FREE SHIPPING GLOBALLY</p>

    </div>
   </div>
    
  </div>
  <div className="row" style={{alignItems:"baseline",paddingTop:"50px"}}>
        <div className="col-md-5 offset-md-4" >
          <img src='logo_title280_80.svg' alt='images' width={450} height={80} ></img>
        </div>
        <div className="col-md-3 ms-md-auto" style={{alignItems:"baseline"}} >
          <select className="selectpicker countrypicker" data-countries="AT,BE,BG,HR,CY,CZ,DK,EE,FI,FR,DE,GR,HU,IE,IT,LV,LT,LU,MT,NL,PL,PT,RO,SK,SI,ES,SE" >
            <option>UNITED STATES (USD $) </option>
            <option>America</option>
          </select>
          
          <NavLink to="/login" className="nav-link" href="#"> 
          
          <FaRegUser style={{margin:"10px"}} /> 
        
          </NavLink>
          <FaSistrix style={{margin:"10px"}} />
          <FaShoppingBag style={{margin:"10px"}} />
        </div>
  </div>
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <AllCategory />
     
    </div>
  </div>
</div>

  </>
  )
}

export default Header