import React from 'react'
import Mynav from '../shares/Mynav'
import Mysidebar from '../shares/Mysidebar'
import Myfooter from '../shares/Myfooter'
import { Outlet } from 'react-router-dom'

function Mylandingpage() {
  return (
   <div className='container-fluid'>
    <div className='row'>
        <div className='col-12 shadow g-0'>
            <Mynav/>
        </div>
    </div>
<div className='row'>
    <div className='col-md-2'>
            <Mysidebar/>
    </div>
    <div className='col-md-10'>
        <div className='page1'>
                <Outlet/>
        </div>
        <Myfooter/>
    </div>
</div>

   </div>
  )
}

export default Mylandingpage