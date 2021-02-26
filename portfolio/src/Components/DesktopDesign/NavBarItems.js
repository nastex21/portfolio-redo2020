import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems({ activeClass, width }) {
  console.log('width from Nav' + width);
  return (
    <div id="navbarIndex" style={{'paddingLeft': width + 20}}>
      <Navbar id="navbar">
        <Nav>
          <Nav.Item>
            <Nav.Link className={activeClass == 'home' ? 'is-active' : null} href="#home" data-scroll="#home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'services' ? 'is-active' : null} href="#services"  data-scroll="#services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'skills' ? 'is-active' : null} href="#skills" data-scroll="#skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'portfolio' ? 'is-active' : null} href="#portfolio" data-scroll="#portfolio">Portfolio</Nav.Link>
          </Nav.Item>
                 <Nav.Item>
            <Nav.Link className={activeClass == 'aboutme' ? 'is-active' : null} href="#aboutme" data-scroll="#aboutme">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'contact' ? 'is-active' : null} href="#contact" data-scroll="#contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
