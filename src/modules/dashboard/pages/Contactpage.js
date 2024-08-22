import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdOutlinePreview } from "react-icons/md";
const myimg = "https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg";


function Contactpage() {
  const [x, y] = useState([])

  const myaxiosapi = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((d) => {
      console.log(d.data);
      y(d.data)
    })

  }

  useEffect(() => {
    myaxiosapi();
  }, []);



  return (
    //  <div className='container-fluid'>
    //   <div className='row'>
    //     {x.map((mydata)=>{
    //       return(
    //         <div class="col-md-3 col-sm-6 mb-4 position-relative">
    //       <div class="card">
    //         <div class="favorite-icon position-absolute">
    //           <i class="fa-solid fa-heart"></i>
    //         </div>
    //         <div id="carouselExample1" class="carousel slide" data-bs-ride="carousel">
    //           <div class="carousel-inner">
    //             <div class="carousel-item active">
    //               <img src={myimg} class="img-fluid d-block w-100" alt="Product Image 1"/>
    //             </div>
    //             <div class="carousel-item">
    //             <img src={myimg} class="img-fluid d-block w-100" alt="Product Image 2"/>
    //             </div>
    //             <div class="carousel-item">
    //             <img src={myimg} class="img-fluid d-block w-100" alt="Product Image 3"/>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="card-body text-start">
    //           <h5 class="card-title"> Id: {mydata.id}</h5>
    //           <p class="product-description m-0">Website: {mydata.email}</p>
    //           <p class="product-description text-danger m-0">{mydata.website}</p>
    //           <div class="product-price">Phone No:{mydata.phone}</div>
    //           <div class="product-rating mb-3">
    //             <span>★★★★☆</span>
    //           </div>
    //           <p class="product-review"><b>City:</b> {mydata.address.city}</p>
    //           <a href="#" class="btn btn-primary">Buy Now</a>
    //         </div>
    //       </div>
    //     </div>
    //       )
    //     })}

    //   </div>
    //  </div>
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <table class="table table-bordered border-primary">
            <thead>
              <tr>
                <th scope="col">Sno</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">City</th>
                <th scope="col">Website</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {x.map((mydata) => {
                return (
                  <tr>
                    <th scope="row">{mydata.id}</th>
                    <td>{mydata.name}</td>
                    <td>{mydata.email}</td>
                    <td>{mydata.phone}</td>
                    <td>{mydata.address.city}</td>
                    <td>{mydata.website}</td>
                    <td>
                      
                      <Link to={`detailspage/${mydata.id}`} className="badge text-bg-info"><MdOutlinePreview/></Link>
                      <Link className="badge text-bg-warning ms-1"><FaEdit/></Link>
                      <Link className="badge text-bg-danger ms-1"><MdDelete/></Link>
                    </td>
                  </tr>
                )
              })}


            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Contactpage