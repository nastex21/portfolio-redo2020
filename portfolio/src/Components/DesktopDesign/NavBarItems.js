import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems() {

  return (
    <div className="navbarDiv mb-5" id="navbarIndex">
      <Navbar id="navbar-example2" fixed="top">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Services">Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Skills">Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
