import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import  SkillsSection  from "./components/SkillBar";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CompetitiveProgramming from "./components/CompetitiveProgramming";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="container mx-auto max-w-7xl px-4">
      <Navbar />
      <Header />
      <main>
        <About />
        <SkillsSection />
        <Projects />
        {/* <Certifications /> */}
        {/* <CompetitiveProgramming /> */}
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}