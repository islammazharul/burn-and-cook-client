import React from 'react';

const Footer = () => {
    return (
        <div className='bg-gray-900'>
            <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
                <div className='lg:grid grid-cols-5 p-5'>
                    <div className='text-slate-300 space-y-4 p-4'>
                        <h1 className='ml-2 text-2xl font-bold tracking-wide text-slate-300'>
                            Burn<span className='text-red-400'>Cook</span>
                        </h1>
                        <p>There are many variations of trendy Jobs, but the majority have suffered alteration in some form.</p>
                        <img src="https://i.ibb.co/7Srb32j/Group-9969.png" alt="" />
                    </div>
                    <div className='text-slate-300 space-y-4 p-4'>
                        <h2 className='text-xl font-bold'>Company</h2>
                        <p>About us</p>
                        <p>Work</p>
                        <p>Latest News</p>
                        <p>Careers</p>
                    </div>
                    <div className='text-slate-300 space-y-4 p-4'>
                        <h2 className='text-xl font-bold'>Product</h2>
                        <p>Prototype</p>
                        <p>Plans & Pricing</p>
                        <p>Customers</p>
                        <p>Integrations</p>
                    </div>
                    <div className='text-slate-300 space-y-4 p-4'>
                        <h2 className='text-xl font-bold'>Support</h2>
                        <p>Help Desk</p>
                        <p>Sales</p>
                        <p>Become a Partner</p>
                        <p>Developers</p>
                    </div>
                    <div className='text-slate-300 space-y-4 p-4'>
                        <h2 className='text-xl font-bold'>Contact</h2>
                        <p>524 Broadway , NYC</p>
                        <p>+1 777 - 978 - 5570</p>
                    </div>
                </div>
                <div className='py-6 text-sm text-center text-gray-400'>
                    © 2023 Burn&Cook Inc. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;