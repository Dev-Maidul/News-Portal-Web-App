import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets//user.png'
const Navbar = () => {
    return (
        <div className='flex gap-2 w-10/12 mx-auto items-center justify-between py-4'>
            <div className="nav-left"></div>
            <div className="nav-middle flex gap-3 items-center">
                <NavLink to='/' className='text-accent'>Home</NavLink>
                <NavLink to='/about' className='text-accent'>About</NavLink>
                <NavLink to='/career' className='text-accent'>Career</NavLink>
            </div>
            <div className="nav-right flex items-center gap-3">
                <img src={user} alt="" />
                <button className='btn btn-primary p-6 text-lg'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;