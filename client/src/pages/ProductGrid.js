import React from 'react';
import Products from './Products';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';



 const ProductGrid = () => {
 
  return (
    <>
    <Header />
  
        <h1 style={{textTransform: "uppercase",fontWeight:"400",fontSize:"30px",alignContent:"center",letterSpacing:"3px", paddingBottom: "25px",paddingTop:"60px"}}>BEST OF ARTVISTA</h1>

      <Products />
    <Footer />
    
    
    </>
  
      
     
  )
}

export default ProductGrid;