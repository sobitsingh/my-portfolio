import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from "./images/logo.jpg";
import './navbar.css';

const Navbar = () => {
  const [isNavbarVisible, setNavbarVisibility] = useState(false);

  const toggleNavbar = () => {
    setNavbarVisibility(!isNavbarVisible);
  };

  return (
    <nav className={`navbar navbar-expand-lg p-4 shadow-sm navbar-me ${isNavbarVisible ? 'navbar-show' : ''}`}>
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className='nav-item'>
            <Link to="/" className='nav-link'>
              <img src={logo} alt="Sobit Singh" className="navbar-logo rounded"/>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`navbar-right ${isNavbarVisible ? 'navbar-right-show' : ''}`}>
        <ul className='navbar-nav'>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/cv" className="nav-link">CV</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-hamburger" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} bounce />
      </div>
    </nav>
  );
};

export default Navbar;
