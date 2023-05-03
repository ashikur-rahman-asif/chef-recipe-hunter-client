import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-main'>
            <div className="h-full w-full max-w-7xl mx-auto px-5 flex justify-center text-white items-center text-center">
                <div className=''>
                <h3 className='font-bold text-5xl'>Simply Recipes</h3>
                <h4 className='font-semibold mt-4'>No Fluff, Just Recipes</h4>
                </div>
            </div>
        </div>
    );
};

export default Header;