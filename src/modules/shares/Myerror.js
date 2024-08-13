import React from 'react'
import { Link } from 'react-router-dom'

function Myerror() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 text-center'>
                <h1 className='c-h'>404</h1>
                <h3>Page Not Found</h3>
                <Link to="/" className="btn btn-danger">Back to login page</Link>
            </div>
        </div>
    </div>
  )
}

export default Myerror