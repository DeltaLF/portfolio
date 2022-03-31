import React from "react";
import "./Certificate.css";
class Certificate extends React.Component {
  renderCertificate() {
    return [0, 0, 0, 0].map((certficate, ind) => {
      return (
        <div className="card" key={ind} style={{ backgroundColor: "pink" }}>
          <h1>Certificate card</h1>
          <img src="" alt="certificate" />
        </div>
      );
    });
  }
  render() {
    return (
      <div id="certificate-main">
        <div className="certificate-header">
          <h1 id="test">Certificate!</h1>
        </div>
        <div className="certificate-body">
          <div className="container">{this.renderCertificate()}</div>
        </div>
      </div>
    );
  }
}

export default Certificate;
