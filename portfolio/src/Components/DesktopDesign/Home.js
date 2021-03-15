import React, { useEffect } from "react";
import logo from '../../images/personallogo.jpg';

function Home() {
  return (
    <div id="splashPage">
      <div id="leftside">
        <img id="logo" src={logo} alt="personal logo with T and S"/>
        <p>I'm</p>
      </div>
      <div id="rightside">
        <div id="rightText">
          <p>a <span className="emphasisWord">DREAMER</span>.</p>
          <p>a <span className="emphasisWord">BUILDER</span>.</p>
          <p>a <span className="emphasisWord">CREATOR</span>.</p>
          <p>a <span className="emphasisWord">MAINTAINER</span>.</p>
          <p>a <span className="emphasisWord">DEVELOPER</span>.</p>
          <p className="myName">TONY<span id="lastName">SALAZAR</span>.</p>
        </div>
        <a href="#aboutme" className="arrow-container">
          <div className="arrow"></div>
          <div className="arrow"></div>
          <div className="arrow"></div>
        </a>
      </div>
    </div>
  );
}

export default Home;
