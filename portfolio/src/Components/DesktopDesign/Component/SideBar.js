import React from "react";

function SideBar({locationPath}) {
  console.log(locationPath);
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div id="sidebarIMG">
          <img src="/images/resizedIMG.jpg" alt="Me" />
        </div>
        <ul className="list-unstyled components">
          <div id="myName">
            <span id="firstName">Tony </span>
            <span id="lastName"> Salazar</span>
          </div>
          <hr />
          <li>
            <a id={locationPath == 'home' ? 'active' : null } href="/">Home</a>
          </li>
          <li>
            <a id={locationPath == 'services' ? 'active' : null } href="/services">Services</a>
          </li>
          <li>
            <a id={locationPath == 'skills' ? 'active' : null } href="/skills">Skills</a>
          </li>
          <li>
            <a id={locationPath == 'portfolio' ? 'active' : null } href="/portfolio">Portfolio</a>
          </li>
          <li>
              <a id={locationPath == 'aboutme' ? 'active' : null } href="/aboutme">About Me</a>
          </li>
          <li>
            <a id={locationPath == 'contact' ? 'active' : null } href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
