import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../logo.svg';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Link id='logo' to='/'>
                <img src={Logo} alt='Logo'></img>
            </Link>
            <div className='links'>
                <Link to='/demo'>Demo</Link>
                <Link to='/login'>Login</Link>
                <Link to='/playground'>Playground</Link>
            </div>
        </div>
    );
}

export default NavBar;