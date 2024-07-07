import React from 'react';
import '../pages/product.css';
import '../pages/pro.css';
import $ from "jquery";
import '../pages/pro.js';

const DisplayProducts = () => {

  define( [ "jquery" ], function( $ ) {
    const mobileScreen = window.matchMedia("(max-width: 990px )");
    $(document).ready(function () {
        $(".dashboard-nav-dropdown-toggle").click(function () {
            $(this).closest(".dashboard-nav-dropdown")
                .toggleClass("show")
                .find(".dashboard-nav-dropdown")
                .removeClass("show");
            $(this).parent()
                .siblings()
                .removeClass("show");
        });
        $(".menu-toggle").click(function () {
            if (mobileScreen.matches) {
                $(".dashboard-nav").toggleClass("mobile-show");
            } else {
                $(".dashboard").toggleClass("dashboard-compact");
            }
        });
    });
    
    } );
  return (
    <>

<div className='dashboard'>
    <div className="dashboard-nav">
        <header><a href="#!" className="menu-toggle"><i className="fas fa-bars"></i></a>
        <a href="#" className="brand-logo">
          <i className="fas fa-anchor"></i> <span>
                  <div class="hamburger_icon">
                        <div class="icon"></div>
                    </div>
                    </span></a></header>
        <nav className="dashboard-nav-list">

            <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                    className="fas fa-photo-video"></i> COLOR </a>
                <div className='dashboard-nav-dropdown-menu'><a href="#"
                                                            className="dashboard-nav-dropdown-item">All</a><a
                        href="#" className="dashboard-nav-dropdown-item">Recent</a><a
                        href="#" className="dashboard-nav-dropdown-item">Images</a><a
                        href="#" className="dashboard-nav-dropdown-item">Video</a></div>
            </div>
            <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                    className="fas fa-users"></i> SUBJECT </a>
                <div className='dashboard-nav-dropdown-menu'><a href="#"
                                                            className="dashboard-nav-dropdown-item">All</a><a
                        href="#" className="dashboard-nav-dropdown-item">Colorful Painting (4)</a>
                        <a  href="#"
                        className="dashboard-nav-dropdown-item">Flower & Tree (18)</a>
                        <a  href="#" className="dashboard-nav-dropdown-item">Ocean & Sky (55)</a>
                        <a  href="#" className="dashboard-nav-dropdown-item">Mountain (33)</a>
                        <a  href="#" className="dashboard-nav-dropdown-item">Landscape (7)</a>
                       
                        </div>
            </div>
            <div className='dashboard-nav-dropdown'><a href="#!" className="dashboard-nav-item dashboard-nav-dropdown-toggle"><i
                    className="fas fa-money-check-alt"></i> SHAPE </a>
                <div className='dashboard-nav-dropdown-menu'>
                  <a href="#" className="dashboard-nav-dropdown-item">vertical (286)</a>
                  <a href="#" className="dashboard-nav-dropdown-item">horizontal (66)</a>
                  <a href="#" className="dashboard-nav-dropdown-item"> square (37)</a>
                  <a href="#" className="dashboard-nav-dropdown-item">set of 2 (82)</a>
                </div>
            </div>
         <div className="nav-item-divider"></div>
          <a href="#" className="dashboard-nav-item"><i className="fas fa-sign-out-alt"></i> Logout </a>
        </nav>
    </div>
    <div className='dashboard-app'>
        <div className='dashboard-content'>
            <div className='container'>
                <div className='card'>
                    <div className='card-header'>
                    <p> Products </p>
                    </div>
                    <div className='card-body'>
                        
     

<div className="buttons">
<button className="fa fa-th-large"  aria-hidden="true"></button> &nbsp;  <button className="fa fa-th-list"  aria-hidden="true"></button> 
</div>

<div className="container">

<div id="div1">
<section className="section-grid">
<div className="grid-prod">
  <div className="prod-grid">
  <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
    <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. </p>
        <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
  </div>
  <div className="prod-grid">
  <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
    <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
  </div>
  <div className="prod-grid">
    <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
    <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
<button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
  </div>
  <div className="prod-grid">
    <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
    <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
<button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
  </div>
  <div className="prod-grid">
    <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
    <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
<button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
  </div>
  <div className="prod-grid">
    <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
    <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
<button className="btn"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
  </div>
</div>
  </section> 
</div>
    
<div id="div2" style={{display : "none"}}>
<section className="section-list">
  <table>
    <tr>
      <td>
          <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
      </td>
      <td>  
        <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button>
      </td>
    </tr>
    <tr>
      <td width="30%">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
      </td>
      <td>  <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
    </tr>
    <tr>
      <td width="30%">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img>
        </td>
      <td>  <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
    </tr>
    <tr>
      <td width="30%">
        <img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img></td>
      <td>  <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
    </tr>
    <tr>
      <td width="30%"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img></td>
      <td>  <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
    </tr>
    <tr>
      <td width="30%"><img src="https://images.contentful.com/3h0qt25be5vd/1ojeAoISmMSKysKIOKEWGi/22b6344383ffabc7e250f1eed88287ae/Brew_Guide-KalitaWave-Step03.jpg?w=960&h=640&fm=jpg&q=70" alt="kalita"></img></td>
      <td>  <h3>Ph'nglui mglw'nafh. </h3>    
        <p>Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.</p>
        <button className="btn-list"> Buy <i className="fa fa-shopping-cart" aria-hidden="true"></i></button></td>
    </tr>
  </table>
  </section> 
</div>
</div>  

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
    
  )
}

export default DisplayProducts
