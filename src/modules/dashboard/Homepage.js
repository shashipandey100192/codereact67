import React from 'react';
import { students67 } from '../../Mydata';

function Homepage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 bg-danger'>
                    <h3>Total Students: {students67.length}</h3>
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
        </div>
    )
}

export default Homepage