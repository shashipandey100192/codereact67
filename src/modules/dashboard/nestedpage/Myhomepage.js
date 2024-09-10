import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Myhomepage() {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-12 p-3 border'>
                    <h3>Product Details Page</h3>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="mainpage" className="nav-link active" aria-current="page">Main</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="productpage"className="nav-link">Product list</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="reviewpage" className="nav-link">product Review</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Outlet></Outlet>


                </div>
            </div>
        </div>
    )
}

export default Myhomepage