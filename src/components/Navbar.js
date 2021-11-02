import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Productos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/aboutus'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={{ pathname: "https://web.whatsapp.com/send?phone=573148239617&text=" }}
                target='_blank'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contáctenos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;