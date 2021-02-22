import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems({ activeClass }) {
  return (
    <div id="navbarIndex">
      <Navbar id="navbar">
        <Nav>
          <Nav.Item>
            <Nav.Link className={activeClass == 'home' ? 'is-active' : null} href="#homeSec" data-scroll="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'services' ? 'is-active' : null} href="#servicesSec"  data-scroll="#services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'skills' ? 'is-active' : null} href="#skillsSec" data-scroll="#skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'portfolio' ? 'is-active' : null} href="#portfolioSec" data-scroll="#portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'contact' ? 'is-active' : null} href="#contactSec" data-scroll="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
