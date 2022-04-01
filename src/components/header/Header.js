import React from "react";
import "./Header.css";
import Typical from "react-typical";
import { header } from "../../portfolio";

class Header extends React.Component {
  render() {
    return (
      <div className="page header-page">
        <div>
          <Typical
            steps={header.intro}
            // loop={Infinity}
            wrapper="p"
          ></Typical>
        </div>
      </div>
    );
  }
}

export default Header;
