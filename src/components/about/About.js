import React from "react";
import "./About.css";
import { aboutPage } from "../../portfolio";
import portraitImage from "./../../resources/images/portrait_example.jpg";
import { Fade } from "react-reveal";

class About extends React.Component {
  renderSkills() {
    return aboutPage.softwareSkills.map((skill) => {
      return (
        <li key={skill.skillName}>
          {skill.skillName}{" "}
          <span
            className="iconify"
            data-icon={skill.fontAwesomeClassname}
            style={skill.style}
            data-inline="false"
          ></span>{" "}
        </li>
      );
    });
  }
  render() {
    return (
      <div id="about-page" className="about-page">
        <Fade left duration={2000}>
          <div className="left">
            <div className="left-header">
              {" "}
              <h1>About</h1>
            </div>

            <p>
              {aboutPage.aboutMe} Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Dolorem maxime ducimus facilis accusantium ipsam
              vero, odio odit blanditiis vel perferendis! Facere nulla,
              praesentium nobis alias sed vitae iure! Natus, recusandae? Ut quis
              quod commodi voluptas enim asperiores impedit et hic molestias,
              odit ipsum recusandae, dolorem quisquam explicabo quasi vero nisi
              odio? Voluptatum est magnam dolorum laborum modi facilis quibusdam
              obcaecati. Optio, porro laboriosam sequi inventore nihil sint,
              similique exercitationem, hic impedit repellendus earum nostrum
              magnam fugiat est ipsam laborum ad. Libero, ipsa. Provident modi
              voluptas alias possimus, nihil quae fugit.
            </p>
            <h3>Skills:</h3>
            <ol>{this.renderSkills()}</ol>
          </div>
        </Fade>
        <Fade right>
          <div className="right" duration={2000}>
            <img className="" src={portraitImage} alt="portrait" />
          </div>
        </Fade>
      </div>
    );
  }
}

export default About;
