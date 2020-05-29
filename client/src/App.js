import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export class Navbar extends Component {
  render() {
    return (
      <div>
        <ul id="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#donate">Donate</a></li>
          <li><a href="#signin">Sign in</a></li>
        </ul>
      </div>
    )
  }
}


export default App;
