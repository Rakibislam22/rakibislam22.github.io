import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <Header />
      <main>
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}