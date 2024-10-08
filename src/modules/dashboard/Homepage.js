import React, { useEffect, useState } from 'react';
import { students67 } from '../../Mydata';
import { useSelector,useDispatch } from 'react-redux';
import { increment } from '../reduxpage/Myactions';


function Homepage() {
    const mynumber = useSelector((state) => state.counter.value)
    const mybind = useDispatch();
    const [x,y]=useState({})

    const  mylocal = ()=>{
        let a = JSON.parse(localStorage.getItem("formdata"));
        console.log(a);
        if(a)
        {
            y(a)
        }
        
    }
useEffect(()=>{
    mylocal();
},[])


    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 bg-danger'>
                    <h3>Total Students: {students67.length}</h3>
                    <h1>{mynumber}</h1>
                    <button type='button' onClick={()=>mybind(increment())}>increment</button>
                </div>

            {students67.map((d)=>{
                return(
                    <div className='col-md-3 mt-3'>
                    <div className={d.course==="mern" ? "card shadow bg-success" : "card shadow bg-warning"} >
                            <div className="card-body">
                                <h3 className="card-title">Sno: {d.sno}</h3>
                                <h5 className="card-title">Name: {d.name}</h5>
                                <h5 className="card-title">Course: {d.course}</h5>
                                <h5 className="card-title">Batch Time: {d.batch}</h5>
                            </div>
                    </div>
                </div>
                )
            })}

                
            </div>

                <div className='row'>
                    <div className='col-12 p-5 bg-dark text-white'>
                            <h1>data from local storage</h1>
                            <h4>{x.fullname===true ?  x.fullname : "data not avail"}</h4>
                            <h4>{x.email}</h4>
                            <h4>{x.gender}</h4>
                            
                    </div>
                </div>

        </div>
    )
}

export default Homepage