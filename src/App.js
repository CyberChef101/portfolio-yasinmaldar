import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Skills from './components/Skills';  
import Timeline from './components/Timeline';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Timeline /> 
      <Skills /> 
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
