import React from 'react';
import ReactDOM from 'react-dom/client';
import About, { Mycontact, Mycontact1 } from './About';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Contactus from './Contactus';
import Mybspage from './Mybspage';
import Myreactbspage from './Myreactbspage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <About></About>
    <Mycontact/>
    <Mycontact1/>
    <Contactus/>
    <Mybspage/>
    <Myreactbspage/>
    

    
   
  </React.StrictMode>
);

