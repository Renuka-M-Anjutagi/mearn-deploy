import React from 'react'
import Card from './Card';
import "../App.css"
function Popularproject() {
    const data = [
        {
          id:1,
          price:'$40.00 - $80.00',
          title:'DATA SCIENCE',
          image:'/images/slider.png',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          id:2,
          price:'$20.00 $18.00',
          title:'FULL STACK DEVELOPMENT',
          image:'/images/slider2.png',
          description:'This card has supporting text below as a natural lead-in to additional content.'
        },
        {
          id:3,
          price:'$50.00 $25.00',
          title:'DATA SCIENCE',
          image:'/images/slider3.png',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
        },
        {
          id:4,
          price:'$40.00',
          title:'CYBER SECURITY',
          image:'/images/slider4.png',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
        {
          id:5,
          price:'$40.00',
          title:'CAREER',
          image:'/images/slider5.png',
          description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
        },
      ]
  return (
    <div>
          <h1 style={{textTransform: "uppercase",fontWeight:"400",fontSize:"30px",alignContent:"center",letterSpacing:"3px", paddingBottom: "40px",paddingTop:"50px"}}>POPULAR SUBJECT</h1>
      <div className="row row-cols-1 row-cols-md-3 g-3" style={{paddingBottom:"60px"}}>

        <div className="col" >
            <div className="card">
                <div className="img-hover-zoom">
                   <div className="container1">
                        <img  src="/images/pro1.png" width={"500px"} height={"500px"} alt="This zooms-in really well and smooth"></img>

                        <div className="overlay"></div>
                        <div className="button1"><a href="#"> SET OF 2 </a></div>
                    </div>
                </div>
            

            </div>
        </div>
        <div className="col" >
            <div className="card">
                <div className="img-hover-zoom">
                   <div className="container1">
                        <img  src="/images/pro2.png" width={"500px"} height={"500px"} alt="This zooms-in really well and smooth"></img>

                        <div className="overlay"></div>
                        <div className="button1"><a href="#">WABI SABI ART </a></div>
                    </div>
                </div>

            </div>
        </div>
        <div className="col" >
            <div className="card">
            <div className="img-hover-zoom">
                   <div className="container1">
                      
                        <img  src="/images/pro4.png" width={"500px"} height={"500px"} alt="This zooms-in really well and smooth"></img>

                        <div className="overlay"></div>
                        <div className="button1"><a href="#"> 3D MINIMALIST</a></div>
                    </div>
                </div>

            </div>
        </div>

      </div>
        
     <hr></hr>

     <div className='slider'>

        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                     <Card data={data} title={data[0].title} price = {data[0].price}  description = {data[0].description} image = {data[0].image} />
     
                </div>
                <div class="carousel-item">
                    <Card data={data} title={data[0].title} price = {data[0].price}  description = {data[0].description} image = {data[0].image} />
     
                </div>
                <div class="carousel-item">
                    <Card data={data} title={data[0].title} price = {data[0].price}  description = {data[0].description} image = {data[0].image} />
     
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

     </div>

        
    </div>
  )
}

export default Popularproject