import { useState } from "react";
import NavBar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

function Portfolio() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default Portfolio;
