import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavigationBar() {
    return (
        <Navbar color="white" light expand="md">
          <div className='container'>
            <img id="projectLogo" src="./img/proj_logo.png" alt="logo with red connection"/>
            <NavbarBrand href="/">Disaster Live</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/donate">Donate</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="/signin">Sign in</NavLink>
              </NavItem> */}
            </Nav>
          </div>
        </Navbar>
    )
}
