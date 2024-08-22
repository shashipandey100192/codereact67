import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Myloginpage from './modules/auth/Myloginpage';
import Myregistorpage from './modules/auth/Myregistorpage';
import Myerror from './modules/shares/Myerror';
import Mylandingpage from './modules/dashboard/Mylandingpage';
import Homepage from './modules/dashboard/Homepage';
import Servicepage from './modules/dashboard/pages/Servicepage';
import Contactpage from './modules/dashboard/pages/Contactpage';
import Aboutpage from './modules/dashboard/pages/Aboutpage';
import Mydetailspage from './modules/dashboard/pages/Mydetailspage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Myloginpage/>}></Route>
        <Route path='registor' element={<Myregistorpage/>}></Route>
        <Route path='dashboard' element={<Mylandingpage/>}>
            <Route path='' element={<Homepage/>}></Route>
            <Route path='service' element={<Servicepage/>}></Route>
            <Route path='contact' element={<Contactpage/>}></Route>
            <Route path='about' element={<Aboutpage/>}></Route>
            <Route path='contact/detailspage/:id' element={<Mydetailspage/>}/>
            <Route path='*' element={<Myerror/>}></Route>
        </Route>
        <Route path='*' element={<Myerror/>}></Route>
        
      </Routes>
    </BrowserRouter>
  

    

    
   
  </React.StrictMode>
);

