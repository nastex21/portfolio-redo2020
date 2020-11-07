import React from "react";
import Nav from "react-bootstrap/Nav";

function NavBarItems() {
  return (
    <div className="navbarDiv mb-5" id="navbarIndex">
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#skills">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavBarItems;
