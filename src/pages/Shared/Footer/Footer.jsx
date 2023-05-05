import React from 'react';

const Footer = () => {
    return (
        <div className="container bg-success bg-opacity-25 rounded px-4 py-4 mt-5">
            <div className="row">
                <div className="col-12 col-md-4 col-lg-4 mx-auto my-2">
                    <div className=''>
                        <h2><span className='text-danger'>Burn</span>&<span className='text-success'>Cook</span></h2>
                        <p>There are many variations of trendy Jobs, but the majority have suffered alteration in some form.</p>
                        <img src="https://i.ibb.co/7Srb32j/Group-9969.png" alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-2 mx-auto">
                    <h2 className='text-xl font-bold'>Company</h2>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className="col-12 col-md-4 col-lg-2 mx-auto">
                    <h2 className='text-xl font-bold'>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className="col-12 col-md-4 col-lg-2 mx-auto">
                    <h2 className='text-xl font-bold'>Contact</h2>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p></div>
            </div>
            <div className="row">
                <div className="col-12 mx-auto text-center mt-2">
                    © 2023 Burn&Cook Inc. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Footer;