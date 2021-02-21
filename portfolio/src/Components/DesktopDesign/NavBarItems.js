import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBarItems({ activeClass }) {
  const [location, setLocation] = useState(null);

  const scrollTo = (place) => {
    console.log(place);
    const anchor = document.querySelector('#' + place);
    console.log(anchor);

    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setLocation(place);
  };

  return (
    <div id="navbarIndex">
      <Navbar id="navbar-example2">
        <Nav>
          <Nav.Item>
            <Nav.Link className={activeClass == 'home' ? 'is-active' : null} href="/" onClick={() => scrollTo('Home')}>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'services' ? 'is-active' : null} href="#Services" onClick={() => scrollTo('Services')}>Services</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'skills' ? 'is-active' : null} href="#Skills" onClick={() => scrollTo('Skills')}>Skills</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'portfolio' ? 'is-active' : null} href="#Portfolio" onClick={() => scrollTo('Portfolio')}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className={activeClass == 'contact' ? 'is-active' : null} href="#Contact" onClick={() => scrollTo('Contact')}>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBarItems;
