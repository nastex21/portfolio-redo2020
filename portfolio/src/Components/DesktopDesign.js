import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
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

  function handleService() {
    console.log('service');
  }

  return (
    <>
      <Container fluid className="px-0">
        <Row>
          <Col className="col-6">
            <div className="left-container p-0 m-0">
              <picture>
                <img className="myPic" src="/images/IMG-3210.jpg" alt="Me" />
              </picture>
            </div>
          </Col>
          <Col className="col-6">
            <div className="right-container">
              <div className="navbarDiv mb-5" id="navbarIndex">
                <NavBarItems />
              </div>
              <div className="contentDiv content-group">
                <Row>
                  <Col >
                    <Home />
                  </Col>
                  <Col >
                    <Services />
                  </Col>
                  <Col >
                    <Skills />
                  </Col>
                  <Col >
                    <Portfolio />
                  </Col>
                  <Col >
                    <Contact />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <>
        <Footer />
      </>
    </>
  );
}

export default DesktopDesign;
