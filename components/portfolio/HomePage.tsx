"use client";

import Background from "./Background";
import Monitor from "./Monitor";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/About";
import Education from "@/components/portfolio/Education";
import TechStack from "@/components/portfolio/TechStack";
import { motion } from "framer-motion";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Footer from "@/components/portfolio/Footer";

export default function Homepage() {
  return (
    <main className="w-full">
      {/* Cinematic Intro */}
      <section className="relative h-screen w-full overflow-hidden">
        <Background />

        <div className="relative z-10 flex h-full w-full items-center justify-center px-8">
          <Monitor />
        </div>
      </section>


      <section className="w-full">
        <About />
      </section>

      <section className="w-full">
        <TechStack />
      </section>

      <section className="w-full">
        <Projects />
      </section>
      
      <section className="w-full">
        <Experience />
      </section>
      
      <section className="w-full">
        <Education />
      </section>

      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
