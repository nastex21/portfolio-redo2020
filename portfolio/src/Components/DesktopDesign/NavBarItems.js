import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems({ activeClass }) {
  return (
    <div id="navbarIndex">
      <Navbar id="navbar">
        <Nav>
          <Nav.Item>
            <Nav.Link className={activeClass == 'home' ? 'is-active' : null} href="#homeSec" data-scroll>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'services' ? 'is-active' : null} href="#servicesSec" data-scroll>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'skills' ? 'is-active' : null} href="#skillsSec" data-scroll>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'portfolio' ? 'is-active' : null} href="#portfolioSec" data-scroll>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'contact' ? 'is-active' : null} href="#contactSec" data-scroll>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
