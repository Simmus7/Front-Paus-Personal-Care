import React from 'react'
import './Header.css';

function Header() {
    return (
        <nav className='header'>
            <div className='logo-image'>
                <img src={process.env.PUBLIC_URL + '/images/LOGO-02.png'} alt="logo" />  
            </div>
        </nav>
    )
}

export default Header
