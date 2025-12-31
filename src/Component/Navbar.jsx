import React, { useContext } from 'react';
import ActiveLink from './ActiveLink';
import logoimg from '../assets/logo.png';
import { AuthContext } from '../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../firebase/firebase.config';

const Navbar = () => {
    const nevigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);
    console.log("photoURL:", user?.photoURL);


    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                toast.success('Signout successful');
                nevigate('/login');
            }).catch((err) => {
                console.log(err);
                toast.error(err.message);
            })
    }


    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <ActiveLink to="/">Home</ActiveLink>
                            <ActiveLink to="/apps">Apps</ActiveLink>

                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <img className="h-[50px] w-[70px]" src={logoimg} alt="Logo" />
                        <h1 className="font-bold text-2xl">
                            Game <span className="text-purple-400">Store</span>
                        </h1>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-4">
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/apps">Apps</ActiveLink>

                    </ul>
                </div>

                <div className="navbar-end space-x-3">
                    {user ? (
                        <div className="relative dropdown dropdown-end">
                            {/* Avatar Button */}
                            <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <img
                                    className="w-10 h-10 rounded-full object-cover border"
                                    src={user.photoURL || "https://i.ibb.co/2kRZyq0/user.png"}
                                    alt="User"
                                    title={user.displayName || user.email}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            <ul
                                tabIndex={0}
                                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li className="px-2 py-1 text-sm font-semibold">
                                    {user.displayName || "User"}
                                </li>
                                <li className="text-xs px-2 text-gray-500">{user.email}</li>
                                <li>
                                    <Link to="/my-profile" className="hover:bg-gray-100">
                                        My Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/update-profile" className="hover:bg-gray-100">
                                        Update Profile
                                    </Link>
                                </li>
                                <li>
                                    <button
                                    onClick={handleSignout}
                                        className="text-red-500 w-full text-left hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <ActiveLink to="/login" className="text-blue-600 hover:underline">
                                Login
                            </ActiveLink>
                            <ActiveLink to="/signup" className="text-blue-600 hover:underline">
                                SignUp
                            </ActiveLink>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default Navbar;
