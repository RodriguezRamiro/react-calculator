import React from 'react';
import './styles/calculator.css';

function Navbar() {
  return (
    <div class="navbar">
    <h1> {/*Calculator*/} </h1>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">About</a></li>
    </ul>
  </div>
  );
}

export default Navbar;