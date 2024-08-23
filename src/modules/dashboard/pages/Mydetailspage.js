import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Mydetailspage() {
  const {id} = useParams();
  const [singlerecord, setdata]=useState({})
  const [x, y]=useState({})

  console.log(id);
  const getsinglerecord = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((d)=>{
      console.log(d.data);
      setdata(d.data);
      y(d.data.address);
    })
  };

  useEffect(()=>{
    getsinglerecord();
  },[])


  return (
   <div className='container-fluid'>
    <div className='row'>
      <div className='col'>
        <h1>User Id: {singlerecord.id}</h1> <Link to="/dashboard/contact" className="btn btn-success btn-sm">Back</Link>
        <hr/>
        <fieldset className='border p-3'>
          <legend>{singlerecord.username}</legend>
        <h4>Name: {singlerecord.name}</h4>
        <h4>Phone No: {singlerecord.phone}</h4>
        <h4>Email Id: {singlerecord.email}</h4>
        <h4>Website: {singlerecord.website}</h4>
        </fieldset>
        <hr/>
        <fieldset className='border p-3'>
          <legend>Address</legend>
        <h4>City: {x.city}</h4>
        <h4>zipcode: {singlerecord.zipcode}</h4>
        <h4>Email Id: {singlerecord.email}</h4>
        <h4>Website: {singlerecord.website}</h4>
        </fieldset>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2736.3766128611883!2d77.22693477434647!3d28.612911975675413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e1!3m2!1sen!2sin!4v1724418830451!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        

      </div>
    </div>
   </div>
  )
}

export default Mydetailspage