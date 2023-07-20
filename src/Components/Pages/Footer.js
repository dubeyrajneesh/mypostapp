import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container-fluid bg-primary bg-gradient text-white" style={{ minHeight: '15rem' }}>
            <div className="row">
                <div className=" col-lg-3 col-md-3 col-sm-12 p-2 ">
                    <h6 className="text-center mb-3">
                        Quick Links
                    </h6>
                    <div className="d-flex flex-column align-items-center pb-3">

                        <a className="text-white mb-3" href="#">About Us</a>
                        <a className="text-white mb-3" href="#">contact Us</a>
                        <a className="text-white mb-3" href="#">Directions</a>
                        <a className="text-white mb-3" href="#">Careers</a>
                        <a className="text-white mb-3" href="#">Blog</a>
                    </div>
                </div>

                <div className=" col-lg-3 col-md-3 col-sm-12 p-2 ">
                    <h6 className="text-center mb-3 ">
                        News Letters
                    </h6>

                    <div className=" d-flex flex-column justify-content-center " >
                        <input type="text" placeholder=" Write your own views" style={{ minHeight: '8rem' }}></input>
                    </div>
                    <div class="d-grid gap-2 mt-3">
                        <button class="btn btn-warning" type="button">Submit</button>

                    </div>

                </div>
                
                <div className=" col-lg-3 col-md-3 col-sm-12 p-2 ">
                    <h6 className="text-center mb-3">
                        Our Products
                    </h6>
                    <div className=" d-flex flex-column align-items-center">
                        <p>Mdbootstrap</p>
                        <p>Mdwordpress</p>
                        <p>Bootstrap Angular</p>
                        <p>Brand flow</p>
                        <p>React Bootstrap</p>
                    </div>
                </div>

                <div className=" col-lg-3 col-md-3 col-sm-12 p-2 ">
                    <h6 className="text-center mb-3">
                        Addresses
                    </h6>
                    <div className=" d-flex flex-column align-items-center">
                        <p>574 Wolf Path </p>
                        <p> Lucknow , Uttar Pradesh</p>
                        <p> Zip Code : 546823</p>
                        <p>Telephone:  +91 94562358</p>
                    </div>

                </div>

                
            </div>
        </div>
    )
}

export default Footer
