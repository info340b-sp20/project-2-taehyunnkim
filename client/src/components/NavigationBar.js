import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default function NavigationBar() {
    return (
        <Navbar color="white" light expand="md">
          <div className='container'>
            <NavbarBrand href="/">Project 2</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Donate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Sign in</NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>
    )
}
