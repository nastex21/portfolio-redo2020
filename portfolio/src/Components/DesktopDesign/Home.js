import React, { useEffect } from "react";

function Home() {
  return (
    <div id="splashPage">
      <div id="leftside">
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
        <a href="#aboutme" class="arrow-container">
          <div class="arrow"></div>
          <div class="arrow"></div>
          <div class="arrow"></div>
        </a>
      </div>
    </div>
  );
}

export default Home;
