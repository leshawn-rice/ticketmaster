// External Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';
// Internal Dependencies
import { NAV_LINKS } from '../../config';
import logo from '../../img/logo.png';
import darkLogo from '../../img/logo_dark.png';
// Styles
import '../../styles/Navbar.scss';


const Navbar = ({ theme }) => {

  let mode = 'home';

  let darkClass = theme === 'dark' ? 'bg-dark' : 'bg-primary';
  let navLogo = theme === 'light' ? logo : darkLogo;

  return (
    <div className={`Navbar ${darkClass}`}>
      <div className="Navbar-Home">
        <img className="Navbar-Logo" src={navLogo} alt="nav-logo" />
        <NavLink className={`Navbar-Header ${darkClass}`} to="/">Ticket Master</NavLink>
      </div>
      <div className={`Navbar-Links ${darkClass}`}>
        {NAV_LINKS[mode].map(link => (
          <NavLink
            key={`${link.label}-navlink`}
            className={`Navbar-Link ${darkClass}`}
            to={link.href}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
export default Navbar;