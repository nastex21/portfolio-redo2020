import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubAlt, faLinkedin, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


function SideBar({location}) {

  return (
    <div className="wrapper" >
      <nav id="sidebar">
        <div id="sidebarIMG">
          <img src="/images/resizedIMG.jpg" alt="Me" />
        </div>
        <div id="myName">
          <span id="firstName">Tony </span>
          <span id="lastName"> Salazar</span>
        </div>
        <hr />
        <div id="sidebarItems">
          <ul className="list-unstyled components">
            <li>
              <a id={location == 'about' ? 'active' : null } href="#aboutme">About Me</a>
            </li>
            <li>
              <a id={location == 'services' ? 'active' : null } href="#services">Services</a>
            </li>
            <li>
              <a id={location == 'skills' ? 'active' : null } href="#skills">Skills</a>
            </li>
            <li>
              <a id={location == 'portfolio' ? 'active' : null } href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a id={location == 'contact' ? 'active' : null } href="#contact">Contact</a>
            </li>
            <div id="sidebarIcons">
                <FontAwesomeIcon icon={faGithubAlt} />
                <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
          </ul>
        </div>

      </nav>
    </div>
  );
}

export default SideBar;
