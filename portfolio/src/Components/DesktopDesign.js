import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import './css/Desktop.css';

function DesktopDesign() {
  return (
    <Container fluid className="px-0">
      <Row>
        <div className="left-container p-0 m-0">
          <picture>
            <img className="myPic" src="/images/IMG-3210.jpg" alt="Picture of me" />
          </picture>
        </div>
        <div className="right-container">
          <div className="navbarDiv mb-5" id="navbarIndex">
            <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} >
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Skills</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">Portfolio</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-4">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default DesktopDesign;
