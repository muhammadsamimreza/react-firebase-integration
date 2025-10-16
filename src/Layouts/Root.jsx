import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='body-bg'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;