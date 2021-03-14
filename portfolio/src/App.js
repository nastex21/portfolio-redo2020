import React, { useState } from "react";
import useWindowSize from "./util/WindowSize";
import { useInView } from "react-intersection-observer";
import { InView } from "react-intersection-observer";
import SideBar from "./Components/DesktopDesign/Component/SideBar";
import Home from "./Components/DesktopDesign/Home";
import AboutMe from "./Components/DesktopDesign/AboutMe";
import Skills from "./Components/DesktopDesign/Skills";
import Services from "./Components/DesktopDesign/Services";
import Portfolio from "./Components/DesktopDesign/Portfolio";
import Contact from "./Components/DesktopDesign/Contact";
import MobileDesign from "./Components/MobileDesign";

function App() {
  const size = useWindowSize();

  const handleChange = (inview, entry) => {
    console.log(inview);
    console.log(entry);
  };

  const desktopFunc = () => {
    return (
      <>
        <SideBar />
        <InView
          as="section"
          onChange={(inView, entry) => handleChange(inView, entry)}>
          <div className="contentDiv" id="homeDiv">
            <Home />
          </div>
        </InView>
        <InView
          as="section"
          onChange={(inView, entry) => handleChange(inView, entry)}>
          <div className="contentDiv" id="servicesDiv">
            <Services />
          </div>
        </InView>
        <InView
          as="section"
          onChange={(inView, entry) => handleChange(inView, entry)}>
          <div className="contentDiv" id="skillsDiv">
            <Skills />
          </div>
        </InView>
        <InView
          as="section"
          onChange={(inView, entry) => handleChange(inView, entry)}>
          <div className="contentDiv" id="portfolioDiv">
            <Portfolio />
          </div>
        </InView>
        <InView
          as="section"
          onChange={(inView, entry) => handleChange(inView, entry)}>
          <div className="contentDiv" id="aboutDiv">
            <AboutMe />
          </div>
        </InView>
        <InView
          as="section"
          onChange={(inView, entry) => handleChange(inView, entry)}>
          <div className="contentDiv" id="contactDiv">
            <Contact />
          </div>
        </InView>
      </>
    );
  };

  return (
    <div className="App">
      {size.width < 768 ? <MobileDesign /> : desktopFunc()}
    </div>
  );
}

export default App;
