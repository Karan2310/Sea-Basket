import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer py-4 px-5">
                <div className="d-flex flex-column flex-md-row align-items-top justify-content-between">
                    <img src={Logo} alt="sea-basket" className='img-fluid mb-4 mb-md-0' />
                    <div className="d-flex flex-column flex-md-row">
                        <div className="d-flex flex-column me-5">
                            <ul>
                                <li><a href="#">Support</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="d-flex flex-column ms-md-5 mt-4 mt-md-0">
                            <ul>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">Return & Refund Policy</a></li>
                                <li><a href="#">Shipping & Delivery Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-5 text-light'>Sea Basket I All Rights Reserved I 2021 Copyright</p>
            </div>
        </>
    )
}

export default Footer