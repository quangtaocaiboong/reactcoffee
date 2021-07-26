import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import "./styles.css";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink className = 'NavLogo' to='/'>thefifteencafe.com</NavLink>
        <NavIcon className = 'CafeIcon' onClick={toggle}>
          <p className='menu'>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
