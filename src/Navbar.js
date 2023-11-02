import React from "react";

const Navbar = () => {
  return (
    <div>
      <header className="App-header">
        <h2>Bongomin Erick Juma</h2>
        <nav className="dropdown">
          <a href="#">Menu</a>
          <ul className="drop">
            <li className="drop-item">
              <a href="#about">About</a>
            </li>
            <li className="drop-item">
              <a href="#portfolio">Projects</a>
            </li>
            <li className="drop-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
