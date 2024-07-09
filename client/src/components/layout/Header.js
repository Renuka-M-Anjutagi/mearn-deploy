import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

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
          
          <NavLink to="/login" className="nav-link" href="/login"> 
          
          <FaRegUser style={{margin:"10px"}} /> 
        
          </NavLink>
          <FaSistrix style={{margin:"10px"}} />
          <FaShoppingBag style={{margin:"10px"}} />
        </div>
  </div>
  <div className="row">
    <div className="col-md-6 offset-md-3">
      

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">All painting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/product">EXPLORE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Abstract painting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">3D MINIMALIST art</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Set Of 2</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="/policy">ourstory</a></li>
            <li><a className="dropdown-item" href="/contact"> contactus</a></li>
            <li><a className="dropdown-item" href="/blog">Blog</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  </div>
</div>

  </>
  )
}

export default Header

