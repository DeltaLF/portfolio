import React from "react";
import "./Navbar.css";
import { socialMediaLinks } from "./../../portfolio";

class Navbar extends React.Component {
  render() {
    return (
      <div id="navbar-main">
        <div className="logo">
          <a href={socialMediaLinks[0].link}>
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="navbar-list">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about-main">About</a>
            </li>
            <li>
              <a href="#experience-main">Experience</a>
            </li>
            <li>
              <a href="#project-main ">Project</a>
            </li>
            <li>
              <a href="#certificate-main">Certificate</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Navbar;
