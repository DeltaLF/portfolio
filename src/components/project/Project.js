import React from "react";
import "./Project.css";
import { project } from "../../portfolio";

class Project extends React.Component {
  renderProjects() {
    return project.map(({ title, imgpath, url, projectDesc }) => {
      return (
        <div className="card">
          <h4>{title}</h4>
          <img src="" alt="project image" />
          <p>{projectDesc}</p>
        </div>
      );
    });
  }
  render() {
    return (
      <div id="project-main">
        <div className="project-header">
          <h1>Projects</h1>
        </div>

        <div className="project-body">
          <div className="container">{this.renderProjects()}</div>
        </div>
      </div>
    );
  }
}

export default Project;
