import React from "react";

function SideBar() {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div id="sidebarIMG">
          <img src="/images/resizedIMG.jpg" alt="Me" />
        </div>
        <ul className="list-unstyled components">
          <p>Tony Salazar</p>
          <hr />
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
              <a href="/aboutme">About Me</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
