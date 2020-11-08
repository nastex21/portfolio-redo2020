import React, { useEffect, useImperativeHandle, useRef } from "react";
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

function DesktopDesign (props, ref) {

    const inputRef = useRef();

     useImperativeHandle(ref, () => {
            const handleScroll = (e) => {
                if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
                    console.log("first if");
                    // Set states for nav items here if the user is on the first section
                } else if (inputRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && inputRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
                    // For the about section
                    console.log("else if");
                } else {
                    // Etc...
                    console.log("else");
                }
            }
            document.addEventListener('scroll', handleScroll);
            return () => {
                document.removeEventListener('scroll', handleScroll);
            }
        });

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
                            <Home {...props} />
                            <Services {...props} />
                            <Skills {...props} />
                            <Portfolio {...props} />
                            <Contact {...props} />
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