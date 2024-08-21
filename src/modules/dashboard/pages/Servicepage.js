import React, { useState } from 'react'

function Servicepage() {

  const [x,y]=useState([])
const myfetchapi =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts').then((d)=>{
        // console.log(d.json());
        return d.json();
    }).then((mydata)=>{
      console.log(mydata);
      y(mydata);
    })

}

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <input type='button' value="fetchdata from api" onClick={myfetchapi}/>
        </div>
      {x.map((d)=>{
        return(
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4 position-relative">
        <div class="card">
          <div class="favorite-icon position-absolute">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div class="card-body text-start">
            <h5 class="card-title">{d.title}</h5>
            <p class="product-description">{d.body}</p>
            <div class="product-price">$10.00 <span class="product-discount">{d.id}</span></div>
            <div class="product-rating mb-3">
              <span>★★★★☆</span>
            </div>
            <p class="product-review">11 Reviews</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
        )
      })}


      </div>
    </div>
  )
}

export default Servicepage