import React from 'react'
import About, { Mycontact1 } from './About';

function Contactus() {
const a = 80;

  return (
    <div style={{color:'red',backgroundColor:'blue',fontSize:`${a}px`}}>Contactus {60+90} {<About/>} {<h2>this is heading two</h2>}</div>
  )
}

export default Contactus