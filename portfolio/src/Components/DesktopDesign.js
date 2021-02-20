import React, {useState} from "react";
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
  const [active, setActive] = useState('');
  const [remove, setRemove] = useState('');
  
  function hasEntered(divName) {
    setActive(divName);
  }

  function hasLeft(divName) {
    setRemove(divName);
  }
 
  return (
    <>
      <Container fluid className="px-0">
        <Row className="no-gutters">
          <Col className="col-5">
            <div className="left-container p-0 m-0">
                <img className="img-fluid" src="/images/IMG-3210.jpg" alt="Me" />
            </div>
          </Col>
          <Col className="col-7">
            <div className="right-container">
            <div className="navbarDiv mb-5" id="navbarIndex">
                <NavBarItems activeClass={active} removeClass={remove} />
              </div>
              <div className="mainContentDiv content-group">
                <Row>
                  <Col>
                    <Waypoint onEnter={() => hasEntered('home')} onLeave={() => hasLeft('home')} horizontal={true}>
                      <div className="homeDiv">
                        <Home />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={() => hasEntered('services')} onLeave={() => hasLeft('services')} horizontal={true}>
                      <div>
                        <Services />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={() => hasEntered('skills')} onLeave={() => hasLeft('skills')} horizontal={true}>
                      <div>
                        <Skills />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={() => hasEntered('portfolio')} onLeave={() => hasLeft('portfolio')} horizontal={true}>
                      <div>
                        <Portfolio />
                      </div>
                    </Waypoint>
                  </Col>
                  <Col>
                  <Waypoint onEnter={() => hasEntered('contact')} onLeave={() => hasLeft('contact')} horizontal={true}>
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
