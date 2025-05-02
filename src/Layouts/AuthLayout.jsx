import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <section>
                <Navbar></Navbar>
            </section>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;