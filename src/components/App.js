import React from "react";
import "./App.css";
import Header from "./header/Header";
import About from "./about/About";
import Experience from "./experience/Experience";
import Project from "./project/Project";
import Certificate from "./certificate/Certificate";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Experience />
        <Project />
        <Certificate />
      </div>
    );
  }
}

export default App;
