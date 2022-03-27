import React from "react";
import "./About.css";
import { aboutPage } from "../../portfolio";
import portraitImage from "./../../resources/images/portrait_example.jpg";

class About extends React.Component {
  renderSkills() {
    return aboutPage.skills.map((skill) => {
      return <li>{skill}</li>;
    });
  }
  render() {
    return (
      <div id="about-main">
        <div className="left">
          <h1>about</h1> <p>{aboutPage.aboutMe}</p>
          <ol>{this.renderSkills()}</ol>
        </div>
        <div className="right">
          <img className="" src={portraitImage} alt="portrait" />
        </div>
      </div>
    );
  }
}

export default About;
