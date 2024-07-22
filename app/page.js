"use client"
import Image from "next/image"
import react from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
// import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
       <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Contact /> 
    </main>
  );
}
