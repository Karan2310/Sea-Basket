import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="container-fluid d-flex align-items-center justify-content-between w-100 py-3 px-4">
                <div className="logo">
                    <img src={logo} alt="sea-bucket" className='img-fluid' />
                </div>
                <div className="nav-links d-flex align-items-center d-none d-md-flex">
                    <ul className='d-flex me-3'>
                        <li>
                            <a href="#">Category</a>
                        </li>
                        <li>
                            <a href="#">FAQs</a>
                        </li>
                        <li>
                            <a href="#">My Cart</a>
                        </li>
                    </ul>
                    <button>Login</button>
                </div>
                <button className='d-block d-md-none'>Login</button>
            </div>
        </nav>
    )
}

export default Navbar