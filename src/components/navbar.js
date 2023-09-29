import React from 'react';
import './navbar.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg my-navbar shadow-sm p-3 bg-body-tertiary rounded">  
      <div className="navbar-left">
        <ul className="navbar-nav">
          <li className='nav-item'>
            <a className='nav-link' href='/'>SOBIT SINGH</a>
          </li>
        </ul>
      </div>
      
      <div className="navbar-right">
        <ul className='navbar-nav'>
          <li className="nav-item">
            
            <a className="nav-link" href="./blog">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/projects">PROJECTS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cv">CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
