import React from 'react';
import ActiveLink from './ActiveLink';
import logoimg from '../assets/logo.png';

const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-base-100  w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Apps</a>
                            </li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className="h-[50px] w-[70px]" src={logoimg}
                            alt="Logo" />

                        <h1 className='font-bold text-2xl'>Game <span className='text-purple-400'>Store</span></h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <ActiveLink to={'/'}>Home</ActiveLink>
                        <ActiveLink to={'/apps'}>Apps</ActiveLink>
                        <ActiveLink to={'/about'}>About Us</ActiveLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <ActiveLink to={'/login'}>Login</ActiveLink>
                    <ActiveLink to={'/signup'}>SignUp</ActiveLink>

                </div>
            </div>
        </div>
    );
};

export default Navbar;