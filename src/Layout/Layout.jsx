import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Scroll from '../Components/Scroll';

const Layout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Scroll></Scroll>
            <div className='min-h-screen max-w-screen'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;