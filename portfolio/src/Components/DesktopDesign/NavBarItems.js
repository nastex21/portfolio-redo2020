import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems({activeClass}) {

  console.log(activeClass);

  return (
    <div className="navbarDiv mb-5" id="navbarIndex">
      <Navbar id="navbar-example2">
        <Nav>
          <Nav.Item>
            <Nav.Link className={activeClass == 'home' ? 'is-active' : null} href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'services' ? 'is-active' : null} href="#Services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'skills' ? 'is-active' : null} href="#Skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'portfolio' ? 'is-active' : null} href="#Portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'contact' ? 'is-active' : null} href="#Contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
