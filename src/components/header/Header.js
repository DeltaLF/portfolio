import React from "react";
import "./Header.css";

import { Zoom } from "react-reveal";

class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <Zoom>
          <h1 style={{ fontSize: "6em" }}>Header</h1>
        </Zoom>
      </div>
    );
  }
}

export default Header;
