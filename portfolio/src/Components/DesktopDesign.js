import React, { useState, useEffect } from "react";
import SideBar from './DesktopDesign/Component/SideBar';
import Home from "./DesktopDesign/Home";
import Services from "./DesktopDesign/Services";
import Skills from "./DesktopDesign/Skills";
import Portfolio from "./DesktopDesign/Portfolio";
import AboutMe from './DesktopDesign/AboutMe';
import Contact from "./DesktopDesign/Contact";
import Footer from "./DesktopDesign/Footer";
import "./css/Desktop.css";

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
            <SideBar />
            <Home />
            <Services />
            <Skills />
            <Portfolio />
            <AboutMe />
            <Contact />
    </>
  );
}

export default DesktopDesign;
