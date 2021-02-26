import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const size = useWindowSize();

  const desktopFunc = () => {
    return (
    <Router>
    <div>
      <SideBar />

      <Switch>
        <Route path="/aboutme">
          <AboutMe />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/Contact">
          <Contact />
        </Route>
        <Route path="/sklls">
          <Skills />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
    )
  }

  return (
    <div className="App">
      { size.width < 768 ? <MobileDesign /> : desktopFunc() }
        } 
    </div>
  );
}

export default App;
