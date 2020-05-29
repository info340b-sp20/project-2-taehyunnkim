import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <MenuNav />
    </div>
  );
}

export class MenuNav extends Component {
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
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
        </Navbar>
      </div>
    )
  }
}

export default App;
