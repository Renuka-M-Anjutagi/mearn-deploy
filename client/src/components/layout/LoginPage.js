import React from 'react'
import Header from './Header';
import Footer from './Footer';

const LoginPage = (props) => {
  return (
    <div>
      <Header />
      <main style={{minHeight: "80vh",fontWeight:"300",color:"black",backgroundColor:"#EFEFEF",padding:"70px"}}>
     
      <center> {props.children}</center>
     
      </main>
    
      <Footer />
    </div>
  )
}

export default LoginPage
