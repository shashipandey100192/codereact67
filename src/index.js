import React,{lazy,Suspense} from 'react';
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
import Parentpage from './modules/dashboard/pages/Parentpage';
import Mygraphpage from './modules/dashboard/pages/Mygraphpage';
// import Mylazypage from './modules/dashboard/pages/Mylazypage';

const Mylazypage = lazy(()=>import('./modules/dashboard/pages/Mylazypage'));

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
            <Route path='myprops' element={<Parentpage/>}></Route>
            <Route path='mygraph' element={<Mygraphpage/>}></Route>
            <Route path='contact/detailspage/:id' element={<Mydetailspage/>}/>
              <Route path='mylazy' element={<Suspense fallback={<section className='myloader'> Loading data...</section>}>
                  <Mylazypage/>
              </Suspense>}>

              </Route>

            <Route path='*' element={<Myerror/>}></Route>
        </Route>
        <Route path='*' element={<Myerror/>}></Route>
        
      </Routes>
    </BrowserRouter>
  

    

    
   
  </React.StrictMode>
);

