import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./DesktopDesign/Home";
import NavBarItems from "./DesktopDesign/NavBarItems";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Services from "./DesktopDesign/Services";
import Skills from "./DesktopDesign/Skills";
import Portfolio from "./DesktopDesign/Portfolio";
import Contact from "./DesktopDesign/Contact";
import Footer from "./DesktopDesign/Footer";
import "./css/Desktop.css";

const getDimensions = (ele) => {
  if (!ele) return;
  console.log("ele");
  console.log(ele);
  console.log(ele.getBoundingClientRect());


  const offsetWidth = ele.offsetWidth;

  console.log(offsetWidth);

  return {

  };
};

function DesktopDesign() {
  const [visibleSection, setVisibleSection] = useState();
  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = [
    { section: "home", ref: homeRef },
    { section: "skills", ref: skillsRef },
    { section: "services", ref: servicesRef },
    { section: "portfolio", ref: portfolioRef },
    { section: "contact", ref: contactRef },
  ];

  //scrolls to address in nav
  const scrollTo = (ele) => {
    console.log(ele);
    if(!ele) return;
    ele.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
   /*  const handleScroll = (e) => {
      console.log(e);
      if (!headerRef.current) return;
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollX;
      console.log("hi2");
      console.log(scrollPosition);

      const selected = sectionRefs.find(({ section, ref }) => {
        console.log(ref);
        console.log(section);
        const ele = ref.current;
        console.log(ele);
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    }; */

    handleScroll();
    window.addEventListener("keydown", handleScroll);
    return () => {
      window.removeEventListener("keydown", handleScroll);
    };
  }, [visibleSection]);


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
            <div className="navbarDiv mb-5" id="navbarIndex" ref={headerRef}>
              <Navbar fixed="top">
                <Nav>
                  <Nav.Item>
                    <Nav.Link
                      href="/home"
                      className={`header_link ${
                        visibleSection === "Home" ? "selected" : ""
                      }`}
                      onClick={() => {
                        scrollTo(homeRef.current);
                      }}>
                      Home
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#services"
                      className={`header_link ${
                        visibleSection === "Services" ? "selected" : ""
                      }`}
                      onClick={() => {
                        scrollTo(servicesRef.current)
                      }}>
                      Services
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#skills"
                      className={`header_link ${
                        visibleSection === "Skills" ? "selected" : ""
                      }`}
                      onClick={() => {
                        scrollTo(skillsRef.current) 
                      }}>
                      Skills
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#portfolio"
                      className={`header_link ${
                        visibleSection === "Portfolio" ? "selected" : ""
                      }`}
                      onClick={() => {
                        scrollTo(portfolioRef.current);
                      }}>
                      Portfolio
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      href="#contact"
                      className={`header_link ${
                        visibleSection === "Contact" ? "selected" : ""
                      }`}
                      onClick={() => {
                        scrollTo(contactRef.current);
                      }}>
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar>
            </div>
            <div className="contentDiv">
              <Home ref={homeRef} />
              <Services ref={servicesRef} />      
              <Skills ref={skillsRef} />
              <Portfolio ref={portfolioRef} />
              <Contact ref={contactRef} />
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
