import React from 'react';
import { NavLink } from 'react-router';

const ActiveLink = ({to, children}) => {
    return (
        <div>
            <NavLink
            to={to}
            className={({ isActive }) =>
               (isActive ? 'text-purple-500 border-2 border-purple-500 p-1 rounded-sm ' : 'text-black')}>
            {children}


            </NavLink>
        </div>
    );
};

export default ActiveLink;