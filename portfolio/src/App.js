import React, { useEffect, useState } from "react";
import useWindowSize from "./util/WindowSize";
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
  const [path, setPath] = useState('home');
  const size = useWindowSize();

  const desktopFunc = () => {
    return (
      <>
        <Home />
        <SideBar location={path} />
        <InView
          threshold="0.5"
          as="section"
          onChange={(inView, entry, about) => entry.isIntersecting ? setPath('about') : null}>
          <div className="contentDiv" id="aboutDiv">
            <AboutMe />
          </div>
        </InView>
        <InView
          threshold="0.5"
          as="section"
          onChange={(inView, entry, services) => entry.isIntersecting ? setPath('services') : null}>
          <div className="contentDiv" id="servicesDiv">
            <Services />
          </div>
        </InView>
        <InView
          threshold="0.5"
          as="section"
          onChange={(inView, entry, skills) => entry.isIntersecting ? setPath('skills') : null}>
          <div className="contentDiv" id="skillsDiv">
            <Skills />
          </div>
        </InView>
        <InView
          threshold="0.5"
          as="section"
          onChange={(inView, entry, portfolio) => entry.isIntersecting ? setPath('portfolio') : null}>
          <div className="contentDiv" id="portfolioDiv">
            <Portfolio />
          </div>
        </InView>
        <InView
          threshold="0.5"
          as="section"
          onChange={(inView, entry, contact) => entry.isIntersecting ? setPath('contact') : null}>
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
