import React from 'react';
import { Link, NavLink } from 'react-router';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <nav>
                <NavLink to='/'>Home</NavLink> 
                <NavLink to='/Mobiles'>Mobiles</NavLink> 
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to='/app'>App</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;