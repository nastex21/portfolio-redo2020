import React, { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Home from "./DesktopDesign/Home";
import NavBarItems from "./DesktopDesign/NavBarItems";
import Services from "./DesktopDesign/Services";
import Skills from "./DesktopDesign/Skills";
import Portfolio from "./DesktopDesign/Portfolio";
import Contact from "./DesktopDesign/Contact";
import Footer from "./DesktopDesign/Footer";
import "./css/Desktop.css";
import SweetScroll from 'sweet-scroll';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
      trigger: '[data-scroll]',
      horizontal: true,
    });
  },
  false,
);

function DesktopDesign() {
  const [active, setActive] = useState('home');
  const [remove, setRemove] = useState('');

  function hasEntered(divName) {
    console.log(divName);
    setActive(divName);
  }

  function hasLeft(divName) {
    setRemove(divName);
  }

  return (
    <>
        <div id="navbarDiv">
          <NavBarItems />
        </div>
        <div id="rightColumn">
          <div className="right-container">
            <Home />
            <Services />
            <Skills />
            <Portfolio />
            <Contact />
          </div>
        </div>
    </>
  );
}

export default DesktopDesign;
