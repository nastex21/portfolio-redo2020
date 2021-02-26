import React from "react";

function SideBar() {
  return (
    <div className="wrapper">
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
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

      <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <i className="fas fa-align-left"></i>
              <span>Toggle Sidebar</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
