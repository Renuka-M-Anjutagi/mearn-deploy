import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Gallery from '../../pages/Gallery';



const Layout = (props) => {
  return (
    <div>
      <Header />
      <div className="bg-image hover-zoom">
        <img src="banner1.png" className="w-100" />
      </div>
     
      <main style={{minHeight: "80vh",fontWeight:"300",color:"black",backgroundColor:"#EFEFEF",padding:"70px"}}>
        <center>
        <p className='h6 text-center'>{'WHISPERING COLORS, SHAPING DREAMS – STUDIO REVERIE, YOUR ARTISTIC ODYSSEY BEGINS HERE! BEST SELLER'}</p></center>
        <br></br>
      <center> {props.children}</center>
      <Gallery />
      </main>
    
      <Footer />
    </div>
  )
}

export default Layout