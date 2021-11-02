import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <nav className='header'>
            <div className='logo-image'>
            <Link to='/'>
                <img src={process.env.PUBLIC_URL + '/images/LOGO-02.png'} alt="logo" />
            </Link>  
            </div>
        </nav>
    )
}

export default Header
