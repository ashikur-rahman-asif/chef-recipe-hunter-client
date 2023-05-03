import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Layouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default Layouts;