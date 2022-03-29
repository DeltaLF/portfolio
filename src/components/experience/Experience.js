import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experience } from "./../../portfolio";

class Experience extends React.Component {
  renderVerticalTimelineElement() {
    return experience.map(({ date, title, jobDesc, skillList }) => {
      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentArrowStyle={{
          //   borderRight: "7px solid  rgb(33, 150, 243)",
          // }}
          date={date}
          iconStyle={{ background: "#B9C29E", color: "#fff" }}
          // icon={}
          // icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> {title}</h3>

          <p> {jobDesc}</p>
          <ol>
            {skillList.map((skill) => {
              return (
                <li>
                  <div className="expSkill">{skill}</div>{" "}
                </li>
              );
            })}
          </ol>
        </VerticalTimelineElement>
      );
    });
  }
  render() {
    return (
      <div id="experience-main">
        <div className="experience-header">
          <h1>Experience</h1>
        </div>

        <div className="experience-body">
          <VerticalTimeline>
            {this.renderVerticalTimelineElement()}
            <VerticalTimelineElement
              iconStyle={{ background: "#B9C29E", color: "#fff" }}
              // icon={
              //   // <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
              // }
            />
          </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default Experience;
