import React from 'react';
import ReactDOM from 'react-dom/client';
import About, { Mycontact, Mycontact1 } from './About';
import "./style.css";
import Contactus from './Contactus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About></About>
    <Mycontact/>
    <Mycontact1/>
    <Contactus/>
    

    
   
  </React.StrictMode>
);

