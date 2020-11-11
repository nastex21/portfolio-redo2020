import React from "react";
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

function DesktopDesign() {
  function hasEntered() {
    console.log("entered");
  }

  function handleService() {
    console.log("service");
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
                  <Col>
                    <Waypoint onEnter={hasEntered} horizontal={true}>
                      <div>
                        <Home />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={hasEntered} horizontal={true}>
                      <div>
                        <Services />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={hasEntered} horizontal={true}>
                      <div>
                        <Skills />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={hasEntered} horizontal={true}>
                      <div>
                        <Portfolio />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={hasEntered} horizontal={true}>
                      <div>
                        <Contact />
                      </div>
                    </Waypoint>
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
