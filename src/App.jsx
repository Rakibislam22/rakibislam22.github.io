import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import  SkillsSection  from "./components/SkillBar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      
      <Header />
      <main>
        <About />
        <SkillsSection />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}