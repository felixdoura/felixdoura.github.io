import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className='logo-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img src={process.env.PUBLIC_URL + '/images/sparrowhawk-01.jpg'} alt='logo' className="logo-img" />
            </Link>
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                INICIO
              </Link>
            </li>
            <li className='nav-item'>
              <a href='#stack-section' className='nav-links' onClick={closeMobileMenu}>
                STACK Y TECNOLOGIAS
              </a>
            </li>
            <li className='nav-item'>
              <a href='#portfolio-section' className='nav-links' onClick={closeMobileMenu}>
                PORTFOLIO
              </a>
            </li>
            <li className='nav-item'>
              <a href='#experience-section' className='nav-links' onClick={closeMobileMenu}>
                EXPERIENCIAS LABORALES
              </a>
            </li>
            <li className='nav-item'>
              <a href='education-section' className='nav-links' onClick={closeMobileMenu}>
                EDUCACION
              </a>
            </li>
            <li className='nav-item'>
              <a href='social-media-section' className='nav-links' onClick={closeMobileMenu}>
                CONTACTO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar