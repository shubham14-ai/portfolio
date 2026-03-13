"use client";

import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { IndependentProjects } from "./sections/IndependentProjects";
import { AIAgents } from "./sections/AIAgents";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <IndependentProjects />
      <AIAgents />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}