import React from 'react';
import Navbar from '../Component/navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer';

const MainLayout = () => {
    return (
          <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;