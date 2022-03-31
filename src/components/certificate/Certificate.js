import React from "react";
import "./Certificate.css";
import { certificate } from "../../portfolio";

class Certificate extends React.Component {
  renderCertificate() {
    return certificate.map((certificate, ind) => {
      return (
        <div className="card" key={ind}>
          <h2>Certificate card</h2>
          <img src="" alt="certificate" />
        </div>
      );
    });
  }
  render() {
    return (
      <div className="page certificate-page" id="certificate-page">
        <div className="page-header">
          <h1 id="test">Certificate</h1>
        </div>
        <div className="page-body">
          <div className="container">{this.renderCertificate()}</div>
        </div>
      </div>
    );
  }
}

export default Certificate;
