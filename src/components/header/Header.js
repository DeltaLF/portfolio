import React from "react";
import "./Header.css";

import { Zoom } from "react-reveal";

class Header extends React.Component {
  render() {
    return (
      <div className="header-main">
        <Zoom>
          <h2 style={{ fontSize: "6em" }}>Header</h2>
        </Zoom>
      </div>
    );
  }
}

export default Header;
