import React from "react";
import "./Project.css";
import { project } from "../../portfolio";

class Project extends React.Component {
  renderProjects() {
    return project.map(({ title, imgpath, url, projectDesc }, index) => {
      return (
        <div className="card" key={index}>
          <h4>{title}</h4>
          <img src="" alt="project image" />
          <p>{projectDesc}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="page project-page" id="project-page">
        <div className="page-header">
          <h1>Projects</h1>
        </div>

        <div className="page-body">
          <div className="container">{this.renderProjects()}</div>
        </div>
      </div>
    );
  }
}

export default Project;
