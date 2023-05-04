import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Layouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer/>
        </div>
    );
};

export default Layouts;