import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems() {
  const scrollTo = ele => {
    console.log('called');
    ele.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="navbarDiv mb-5" id="navbarIndex">
      <Navbar fixed="top">
        <Nav>
          <Nav.Item>
            <Nav.Link href="/home" onClick={() => {scrollTo(homeRef.current)}}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#services" onClick={() => {scrollTo(servicesRef.current)}}>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#skills" onClick={() => {scrollTo(skillsRef.current)}}>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#portfolio" onClick={() => {scrollTo(portfolioRef.current)}}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#contact" onClick={() => {scrollTo(contactRef.current)}}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
