import React from 'react';
import { NavLink } from 'react-router-dom';
// Internal Dependencies
import logo from '../../img/logo3.png';
// Styles
import '../../styles/Navbar.css';


const menus = {
  'guest': [
    { label: 'Login', href: '/login' },
    { label: 'Register', href: '/register' },
    { label: 'About', href: '/about' },
    { label: 'Other Links', href: '/other' },
  ],
  'home': [
    { label: 'Workspaces', href: '/workspaces' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tickets', href: '/tickets' },
    { label: 'Account', href: '/account' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
  'ticket': [
    { label: '\u27F5 Yeti', href: '/projects/[project-name]' },
    { label: 'View Docs', href: '/tickets/[id]/view' },
    { label: 'Get Help', href: '/tickets/[id]/assist' },
    { label: 'Submit', href: '/tickets/[id]/submit' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
  'project': [
    { label: '\u27F5 Springboard', href: '/workspaces/[id]' },
    { label: 'Tickets', href: '/projects/[id]/tickets' },
    { label: 'Open Ticket', href: '/projects/[id]/open-ticket' },
    { label: 'Team Members', href: '/projects/[id]/team' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
  'workspace': [
    { label: 'Projects', href: '/workspaces/[id]/projects' },
    { label: 'Create Project', href: '/workspaces/[id]/create-project' },
    { label: 'Team Members', href: '/workspaces/[id]/team' },
    { label: 'Sign Out', href: '/sign-out' }
  ],
}


const Navbar = ({ theme }) => {

  let mode = 'ticket';

  let backgroundClass = theme === 'light' ? 'bg-light' : 'bg-primary';
  let textClass = theme === 'light' ? 'text-dark' : 'text-light';

  const handleLinkHover = (evt) => {
    const target = evt.target;
    const parent = target.parentElement;

    for (let child of parent.children) {
      child.classList.remove(`active-${theme}`);
    }
    target.classList.add(`active-${theme}`);
  }

  const handleLinkRemove = () => {
    const children = document.querySelector('.Navbar-Links').children;
    for (let child of children) {
      child.classList.remove(`active-${theme}`);
    }
  }

  return (
    <div className={`Navbar ${backgroundClass}`}>
      <div className="Navbar-Home">
        <img className="Navbar-Logo" src={logo} alt="nav-logo" />
        <NavLink className={`Navbar-Header ${textClass}`} to="/">Ticket Master</NavLink>
      </div>
      <div className="Navbar-Links text-dark">
        {menus[mode].map(link => (
          <NavLink
            className={`Navbar-Link ${textClass}`}
            to={link.href}
            onMouseOver={handleLinkHover}
            onMouseOut={handleLinkRemove}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}
export default Navbar;