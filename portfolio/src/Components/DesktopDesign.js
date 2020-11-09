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
  const { height } = ele.getBoundingClientRect();
  console.log(ele.getBoundingClientRect());
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  const offsetWidth = ele.offsetWidth;

  console.log(offsetWidth);

  return {
    height,
    offsetTop,
    offsetBottom,
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
    const handleScroll = () => {
      console.log("hi1");
      console.log(headerRef);
      if (!headerRef.current) return;
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollX;
      console.log("hi2");
      console.log(scrollPosition);

      const selected = sectionRefs.find(({ section, ref }) => {
        console.log(ref);
        const ele = ref.current;
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
    };

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
                        visibleSection === "Leadership" ? "selected" : ""
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
                        visibleSection === "Leadership" ? "selected" : ""
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
                        visibleSection === "Leadership" ? "selected" : ""
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
                        visibleSection === "Leadership" ? "selected" : ""
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
                        visibleSection === "Leadership" ? "selected" : ""
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
              <section
                id="home"
                className="homeDiv about-me mb-5"
                ref={homeRef}>
                <h4 id="title-name">Software Engineer</h4>
                <h1>Tony Salazar</h1>
                <p>
                  Hello, my name is Tony and I’m a passionate software engineer!
                  I love taking what are originally thoughts and ideas, putting
                  pen to paper and then creating fully-fledged web applications!
                  And with new technologies on the horizon and the field always
                  evolving, part of the thrill is to be on your toes to learn
                  new things. So thank you for taking your time visiting my page
                  and I hope you learn more about me and the things I can do!{" "}
                </p>
              </section>
              <section id="services" className="servicesDiv" ref={servicesRef}>
                <h1>Services</h1>
                <div className="row mt-5">
                  <div
                    id="servivcebox1"
                    className=" col-md-5 mb-5 servicesboxes">
                    <div className="row align-items-center cardInfo">
                      <div className="col-2 mt-2 service-icon text-center">
                        <i className="fas fa-tablet-alt serviceicons" />
                      </div>
                      <div className="py-5 col-10 service-articles">
                        <span className="white-font">Web Apps</span>
                        <p>
                          From top to bottom, from the design to the logic to
                          its deployment on servers, I'll create applications
                          that run on the web and that'll conform to the screens
                          of mobile devices.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="servivcebox2"
                    className="col-md-5 mr-5 mb-5 ml-auto servicesboxes">
                    <div className="row align-items-center cardInfo">
                      <div className="col-2 service-icon text-center">
                        <i className="fas fa-palette serviceicons" />
                      </div>
                      <div className="py-5 col-10 service-articles">
                        <span className="white-font">Front-end</span>
                        <p>
                          The core or engine of an application is the internal
                          logic but there’s also other components that help
                          drive it such as the design, user experience,
                          accessibility and even the language/framework that was
                          used to create it. I know how to incorporate all of
                          these ingredients to build websites and applications.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-100"></div>

                  <div
                    id="servivcebox3"
                    className="col-md-5 mr-5 servicesboxes">
                    <div className="row align-items-center cardInfo">
                      <div className="col-2 service-icon text-center">
                        <i className="fas fa-server serviceicons" />
                      </div>
                      <div className="py-5 col-10 service-articles">
                        <span className="white-font">Back-end</span>
                        <p>
                          Taking a beautifully created web site or app and
                          publishing it to the internet requires knowledge in
                          client side and server side communication as well as
                          deployment practices on domains and servers so it
                          ultimately can be easily accessible for the world to
                          enjoy. I can take a development build, move it to
                          production and have the website ready to rock and roll
                          in a short period of time.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    id="servivcebox4"
                    className="col-md-5 mr-5 ml-auto servicesboxes">
                    <div className="row align-items-center cardInfo">
                      <div className="col-2 service-icon text-center">
                        <i className="fas fa-lock serviceicons" />
                      </div>
                      <div className="py-5 col-10 service-articles">
                        <span className="white-font">Security</span>
                        <p>
                          The security of a website is of utmost importance and
                          I take it as such. Whether it’s protecting the
                          sensitive data and information of clients, securing
                          the website with SSL or even performance issues due to
                          outside influences (such as DDOS attack protection), I
                          have knowledge in security practices that give peace
                          of mind.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <Skills id="skills" ref={skillsRef} value={"something"} />
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
