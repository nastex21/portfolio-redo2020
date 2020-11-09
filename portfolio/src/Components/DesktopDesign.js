import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Home from "./DesktopDesign/Home";
import NavBarItems from './DesktopDesign/NavBarItems';
import Services from "./DesktopDesign/Services";
import Skills from "./DesktopDesign/Skills";
import Portfolio from "./DesktopDesign/Portfolio";
import Contact from "./DesktopDesign/Contact";
import Footer from './DesktopDesign/Footer';
import "./css/Desktop.css";

const getDimensions = ele => {
    const { height } = ele.getBoundingClientRect();
    const offsetTop = ele.offsetTop;
    const offsetBottom = offsetTop + height;

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
        { section: "contact", ref: contactRef }
    ];
    const scrollTo = ele => {
        ele.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    

    useEffect(() => {
        const handleScroll = () => { };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                        <NavBarItems />
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