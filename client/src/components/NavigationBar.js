import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavigationBar() {
    return (
        <Navbar color="white" light expand="md">
          <div className='container'>
            <NavbarBrand href="/">Project 2</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/donate">Donate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signin">Sign in</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
    )
}
