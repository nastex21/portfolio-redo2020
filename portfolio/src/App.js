import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import useWindowSize from './util/WindowSize';
import SideBar from "./Components/DesktopDesign/Component/SideBar";
import Home from './Components/DesktopDesign/Home';
import AboutMe from './Components/DesktopDesign/AboutMe';
import Skills from './Components/DesktopDesign/Skills';
import Services from './Components/DesktopDesign/Services';
import Portfolio from './Components/DesktopDesign/Portfolio';
import Contact from './Components/DesktopDesign/Contact';
import MobileDesign from './Components/MobileDesign';
import { useEffect } from "react";

function App() {
  const [location, setLocation ] = useState('home');
  const size = useWindowSize();

  const locationUpdate = (pathValue) => {
    console.log(pathValue);
    setLocation(pathValue);
  };

  const desktopFunc = () => {
    return (
    <Router>
    <div>
      <SideBar locationPath={location} />

      <Switch>
        <Route path="/aboutme">
          <AboutMe setPath={locationUpdate} />
        </Route>
        <Route path="/skills">
          <Skills setPath={locationUpdate} />
        </Route>
        <Route path="/services">
          <Services setPath={locationUpdate} />
        </Route>
        <Route path="/portfolio">
          <Portfolio setPath={locationUpdate} />
        </Route>
        <Route path="/Contact">
          <Contact setPath={locationUpdate} />
        </Route>
        <Route path="/sklls">
          <Skills setPath={locationUpdate} />
        </Route>
        <Route path="/">
          <Home setPath={locationUpdate} />
        </Route>
      </Switch>
    </div>
  </Router>
    )
  }

  return (
    <div className="App">
      { size.width < 768 ? <MobileDesign /> : desktopFunc() }
    </div>
  );
}

export default App;
