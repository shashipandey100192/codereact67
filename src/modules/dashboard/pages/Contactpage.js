import React from 'react'

const myimg = "https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg";

function Contactpage() {
  return (
   <div className='container-fluid'>
    <div className='row'>
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4 position-relative">
        <div class="card">
          <div class="favorite-icon position-absolute">
            <i class="fa-solid fa-heart"></i>
          </div>
          <div id="carouselExample1" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExample1" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

              <div class="carousel-item active">
                <img src={myimg} class="img-fluid d-block w-100" alt="Product Image 1"/>
              </div>
              <div class="carousel-item">
              <img src={myimg} class="img-fluid d-block w-100" alt="Product Image 2"/>
              </div>
              <div class="carousel-item">
              <img src={myimg} class="img-fluid d-block w-100" alt="Product Image 3"/>
              </div>
            </div>
          </div>
          <div class="card-body text-start">
            <h5 class="card-title">Modern Wall Mirror</h5>
            <p class="product-description">A stylish modern wall mirror featuring a slim, streamlined frame, perfect for
              adding a touch of elegance and depth to
              any room.</p>
            <div class="product-price">$10.00 <span class="product-discount">20% Off</span></div>
            <div class="product-rating mb-3">
              <span>★★★★☆</span>
            </div>
            <p class="product-review">11 Reviews</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Contactpage