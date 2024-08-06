import React, { Fragment } from 'react'
import Myimg from "./photos/img3.jpg";
const xyz = "https://5.imimg.com/data5/SELLER/Default/2023/9/342485253/YC/VO/ZS/136900905/nature-wallpaper-500x500.jpeg";

function About() {
  return(
  <Fragment>
    <h1>this is about page</h1> 
    <h2>jdskfjs</h2>
    </Fragment>
  )
}

export default About


export function Mycontact()
{
  return(
    <h3>this is name export function</h3>
  )
}

export function Mycontact1()
{
  return(
    <Fragment>
      <div className='page'>
        <h1>display image from public folder</h1>
        <img src='./images/img2.jpg' width="100"/>
      <h1>display image from src folder</h1>
        <img src={Myimg} width="200"/>
        <h1>CDN online image</h1>
      <img src={xyz} width="300"/>
      </div>
    </Fragment>
  )
}