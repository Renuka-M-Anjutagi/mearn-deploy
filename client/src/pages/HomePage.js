import React from 'react';
import Layout from '../components/layout/Layout';
import Newcard from './Newcard';
import Popularproject from './Popularproject';
import Testmonial from './Testmonial';
import Gallery from './Gallery';



 const HomePage = () => {
  const data = [
    {
      id:1,
      price:'$40.00 - $80.00',
      title:'DATA SCIENCE',
      image:'/images/g6.png',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:2,
      price:'$20.00 $18.00',
      title:'FULL STACK DEVELOPMENT',
      image:'/images/g1.jpg',
      description:'This card has supporting text below as a natural lead-in to additional content.'
    },
    {
      id:3,
      price:'$50.00 $25.00',
      title:'DATA SCIENCE',
      image:'/images/g2.png',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.'
    },
    {
      id:4,
      price:'$40.00',
      title:'CYBER SECURITY',
      image:'/images/g5.png',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
    {
      id:5,
      price:'$40.00',
      title:'CAREER',
      image:'/images/g6.png',
      description:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    },
  ]
  return (
    <Layout>
        <h1 style={{textTransform: "uppercase",fontWeight:"400",fontSize:"30px",alignContent:"center",letterSpacing:"3px", paddingBottom: "25px"}}>Best Seller</h1>

      <Newcard data={data} title={data[0].title} price = {data[0].price}  description = {data[0].description} image = {data[0].image} star = {"10"} />
      <hr></hr>
      
      <Popularproject />

      <hr></hr>
     <Testmonial />
     <hr></hr>
    
      </Layout>
      
     
  )
}

export default HomePage;