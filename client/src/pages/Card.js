import React from 'react'

const  Card = (props) =>  {
  return (
    <div style={{paddingTop:"100px"}}>
        <center>
            <span style={{fontSize:"20px !important",fontWeight:"bold"}}> Let customers speak for us</span>
        </center>

<div className="card-group">
  <div className="card">
    <img src={props.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">{props.title} <button className='verfybutton'>Verified</button></h5>
      <p className="card-text">{props.title}</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={props.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title <button className='verfybutton'>Verified</button></h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={props.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title <button className='verfybutton'>Verified</button></h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src={props.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title <button className='verfybutton'>Verified</button></h5> 
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
   <div className="card">
    <img src={props.image} className="card-img-top" alt="..."></img>
    <div className="card-body">
      <h5 className="card-title">Card title <button className='verfybutton'>Verified</button></h5> 
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Card
