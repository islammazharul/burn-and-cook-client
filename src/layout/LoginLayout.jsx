import React from 'react';
import Navbar from '../pages/Shared/Header/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;