import React from "react";
import { Waypoint } from 'react-waypoint';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./DesktopDesign/Home";
import NavBarItems from "./DesktopDesign/NavBarItems";
import Services from "./DesktopDesign/Services";
import Skills from "./DesktopDesign/Skills";
import Portfolio from "./DesktopDesign/Portfolio";
import Contact from "./DesktopDesign/Contact";
import Footer from "./DesktopDesign/Footer";
import "./css/Desktop.css";

function DesktopDesign() {

  function handleEnter() {
    console.log('entered');
  }

  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <div className="left-container p-0 m-0">
            <picture>
              <img className="myPic" src="/images/IMG-3210.jpg" alt="Me" />
            </picture>
          </div>
          <div className="right-container">
            <div className="navbarDiv mb-5" id="navbarIndex">
                <NavBarItems />
            </div>
            <div className="contentDiv">
            <Waypoint onEnter={handleEnter} >
              <Home />
              <Services />
              <Skills />
              <Portfolio />
              <Contact />
            </Waypoint>
            </div>
          </div>
        </Row>
      </Container>
      <>
        <Footer />
      </>
    </>
  );
}

export default DesktopDesign;
