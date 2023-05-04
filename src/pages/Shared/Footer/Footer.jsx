import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 col-md-4 col-lg-4 mx-auto my-5">
                    <div className=''>
                        <h2><span className='text-danger'>Burn</span>&<span className='text-success'>Cook</span></h2>
                        <p>There are many variations of trendy Jobs, but the majority have suffered alteration in some form.</p>
                        <img src="https://i.ibb.co/7Srb32j/Group-9969.png" alt="" />
                    </div>
                </div>
                <div className="col-10 col-md-4 col-lg-2 mx-auto my-5">
                    <h2 className='text-xl font-bold'>Company</h2>
                    <p>About us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className="col-10 col-md-4 col-lg-2 mx-auto my-5">
                    <h2 className='text-xl font-bold'>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className="col-10 col-md-4 col-lg-2 mx-auto my-5">
                    <h2 className='text-xl font-bold'>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className="col-10 col-md-4 col-lg-2 mx-auto my-5">
                    <h2 className='text-xl font-bold'>Contact</h2>
                    <p>524 Broadway , NYC</p>
                    <p>+1 777 - 978 - 5570</p></div>
            </div>
            <div className="row">
                <div className="col-10 mx-auto text-center">
                    © 2023 Burn&Cook Inc. All rights reserved.
                </div>
            </div>
        </div>
        // <Container className='mt-5 rounded bg-info bg-opacity-25'>
        //     <div className='d-flex justify-content-between p-5 col col-cols-1'>
        //         <div className='text-slate-300 space-y-4 p-3'>
        //             <h2><span className='text-danger'>Burn</span>&<span className='text-success'>Cook</span></h2>
        //             <p>There are many variations of trendy Jobs, but the majority have suffered alteration in some form.</p>
        //             <img src="https://i.ibb.co/7Srb32j/Group-9969.png" alt="" />
        //         </div>
        //         <div className=' p-3'>
        //             <h2 className='text-xl font-bold'>Company</h2>
        //             <p>About us</p>
        //             <p>Work</p>
        //             <p>Latest News</p>
        //             <p>Careers</p>
        //         </div>
        //         <div className=' p-3'>
        //             <h2 className='text-xl font-bold'>Product</h2>
        //             <p>Prototype</p>
        //             <p>Plans & Pricing</p>
        //             <p>Customers</p>
        //             <p>Integrations</p>
        //         </div>
        //         <div className=' p-3'>
        //             <h2 className='text-xl font-bold'>Support</h2>
        //             <p>Help Desk</p>
        //             <p>Sales</p>
        //             <p>Become a Partner</p>
        //             <p>Developers</p>
        //         </div>
        //         <div className=' p-3'>
        //             <h2 className='text-xl font-bold'>Contact</h2>
        //             <p>524 Broadway , NYC</p>
        //             <p>+1 777 - 978 - 5570</p>
        //         </div>
        //     </div>
        //     <div className='pb-3 text-sm text-center text-gray-400'>
        //         © 2023 Burn&Cook Inc. All rights reserved.
        //     </div>
        // </Container>

    );
};

export default Footer;