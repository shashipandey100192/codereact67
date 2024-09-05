import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


function Myregistorpage() {

  const navigat = useNavigate();
  const {register,handleSubmit, formState: { errors }} = useForm()

  const mysubmit = (myformdata)=>{
    console.log(myformdata);
    if(myformdata)
    {
      toast.success("welcome to success registor");
      setTimeout(()=>{
        navigat("/");
      },2000)
      
      
    }

    localStorage.setItem("formdata",JSON.stringify(myformdata));
  }

  return (
    <form onSubmit={handleSubmit(mysubmit)}>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6 bg-light shadow p-3 rounded'>

          <div className='container-fluid'>
            <div className='row'>

              <div className='col-md-12 text-center'>
                <div class="mb-3">
                  <h3>Welcome to Registor page</h3>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">FullName</label>
                  <input type="text" class="form-control" {...register("fullname",{required:true,minLength:3,maxLength:8,pattern:/^[A-Za-z]+$/i})}/>
                  {/* {errors.fullname && <p className='text-danger'>required full name</p> } */}
                  {errors.fullname?.type==="required" && <p className='text-danger'>required full name</p> }
                  {errors.fullname?.type==="minLength" && <p className='text-warning'>name should have 3 letter</p> }
                  {errors.fullname?.type==="maxLength" && <p className='text-info'>name should have 8 letter</p> }
                  {errors.fullname?.type==="pattern" && <p className='text-info'>only alpha letter </p> }

                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Email id</label>
                  <input type="email" class="form-control" {...register("email",{required:true})}/>
                  {errors.email && <p className='text-danger'>required email id</p>}
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Phone No</label>
                  <input type="text" class="form-control" {...register("phone",{required:true})}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">DOB</label>
                  <input type="date" class="form-control" {...register("dob",{required:true})}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Gender</label><br />
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="male" {...register("gender")}/>
                    <label class="form-check-label">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="female" {...register("gender")}/>
                    <label class="form-check-label">Female</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="gender" value="other" {...register("gender")} />
                    <label class="form-check-label">Other</label>
                  </div>

                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Course</label>
                  <select className='form-select' {...register("course")}>
                    <option hidden>Select Course</option>
                    <option>MERN</option>
                    <option>Mean</option>
                    <option>java</option>
                    <option>javascript</option>
                    <option>css</option>
                  </select>
                </div>
              </div>

              <div className='col-md-12'>
                <div class="mb-3">
                  <label class="form-label">Comments</label>
                  <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" {...register("comment")}></textarea>
                  </div>
                </div>
              </div>

              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Create Password</label>
                  <input type="password" class="form-control" {...register("pass")}/>
                </div>
              </div>
              <div className='col-md-6'>
                <div class="mb-3">
                  <label class="form-label">Confirm Password</label>
                  <input type="password" class="form-control" {...register("repass")}/>
                </div>
              </div>


              <div className='col-md-12 text-center'>
                <div class="mb-3">
                  <button className='btn btn-success'>Registor User</button>
                  {/* <Link to="registor">new User</Link> */}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <ToastContainer/>
    </form>
  )
}

export default Myregistorpage