import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Myloginpage() {
    const mynavgat = useNavigate();

    const [uservalue, seuservalue]=useState({
        user:"",
        pass:""
    })

const myset = (e)=>{
    console.log(e.target.value);
    const {name,value} = e.target;
    seuservalue((y)=>{
      return{
        ...y,
        [name]:value
      }
    })

}

const mysubmit = ()=>{

        if(uservalue.user==="admin@gmail.com" && uservalue.pass==="admin")
        {
            alert("welcome");
            mynavgat("/dashboard");
        }
        else
        {
            alert("wrong user and password");
        }

}


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
                                    <input type="email" class="form-control" name='user' onChange={myset} value={uservalue.user}/>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div class="mb-3">
                                    <label class="form-label">Password</label>
                                    <input type="password" class="form-control" name='pass' value={uservalue.pass} onChange={myset}/>
                                </div>
                            </div>
                            <div className='col-md-12 text-center'>
                                <div class="mb-3">
                                   <button className='btn btn-success' type='button' onClick={mysubmit}>Login</button>
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