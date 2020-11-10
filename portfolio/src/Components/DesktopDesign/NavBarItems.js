import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Scrollspy from 'react-scrollspy-highlight';

function NavBarItems() {

  return (
    <nav className="nav">
      <div className="nav__item nav__item--inverse">
        <a href="/" className="nav__link nav__title">React Scrollspy</a>
      </div>
      <Scrollspy
        items={['Home', 'Services', 'Skills', 'Portfolio', 'Contact']}
        currentClassName="nav__item--active"
        className="nav__inner"
        style={{
          fontWeight: 300
        }}
        offset={-50}
        onUpdate={
          (el) => {
            console.log(el)
          }
        }
      >
        <li className="nav__item"><a href="#Home" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#Services" className="nav__link">Services</a></li>
        <li className="nav__item"><a href="#Skills" className="nav__link">Skills</a></li>
        <li className="nav__item"><a href="#Portfolio" className="nav__link">Portfolio</a></li>
        <li className="nav__item"><a href="#Contact" className="nav__link">Contact</a></li>
      </Scrollspy>
    </nav>
  );
}

export default NavBarItems;
