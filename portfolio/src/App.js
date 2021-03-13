import React, { useState } from "react";
import useWindowSize from "./util/WindowSize";
import SideBar from "./Components/DesktopDesign/Component/SideBar";
import Home from "./Components/DesktopDesign/Home";
import AboutMe from "./Components/DesktopDesign/AboutMe";
import Skills from "./Components/DesktopDesign/Skills";
import Services from "./Components/DesktopDesign/Services";
import Portfolio from "./Components/DesktopDesign/Portfolio";
import Contact from "./Components/DesktopDesign/Contact";
import MobileDesign from "./Components/MobileDesign";

function App() {
  const [location, setLocation] = useState("home");
  const size = useWindowSize();

  const locationUpdate = (pathValue) => {
    setLocation(pathValue);
  };

  const desktopFunc = () => {
    return (
      <>
        <SideBar locationPath={location} />

        <Home setPath={locationUpdate} />

        <AboutMe setPath={locationUpdate} />

        <Skills setPath={locationUpdate} />

        <Services setPath={locationUpdate} />

        <Portfolio setPath={locationUpdate} />

        <Contact setPath={locationUpdate} />
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
