import React from 'react';
import { Link } from 'react-router-dom';
function Myloginpage() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-5 bg-light shadow p-3 rounded '>

                    <div className='container-fluid bg-info'>
                        <div className='row'>
                    
                        <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                    <img src="images/img2.jpg" width={100} height={100} className='rounded-circle'/>
                                  <h3>Welcome to Loign page</h3>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Email address</label>
                                    <input type="email" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" />
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                   <button className='btn btn-success'>Login</button>
                                   <Link to="registor">new User</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Myloginpage