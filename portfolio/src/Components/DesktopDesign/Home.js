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
          <p>a <span className="emphasisWord">dreamer</span>.</p>
          <p>a <span className="emphasisWord">builder</span>.</p>
          <p>a <span className="emphasisWord">creator</span>.</p>
          <p>a <span className="emphasisWord">maintainer</span>.</p>
          <p>a <span className="emphasisWord">developer</span>.</p>
          <p className="myName">tony<span id="lastName">salazar</span>.</p>
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
