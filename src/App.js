
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Resume />
      <Skills />
      <Contact />
    </main>
  );
}