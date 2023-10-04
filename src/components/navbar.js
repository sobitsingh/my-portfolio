import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import logo from "./images/logo.png"
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg my-navbar shadow-sm p-3 bg-body-tertiary rounded">
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className='nav-item'>
            <Link to="/" className='nav-link'>
              <img src={logo} alt="Sobit Singh" className="navbar-logo"/>
             </Link> {/* Use Link */}
          </li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <ul className='navbar-nav'>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">BLOG</Link> {/* Use Link */}
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">PROJECTS</Link> {/* Use Link */}
          </li>
          <li className="nav-item">
            <Link to="/cv" className="nav-link">CV</Link> {/* Use Link */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
