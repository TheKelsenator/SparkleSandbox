import { useState } from "react";
import NavBar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Portfolio() {
  return (
    <>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Portfolio;
