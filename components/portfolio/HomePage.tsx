"use client";

import Background from "./Background";
import Monitor from "./Monitor";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/About";
import TechStack from "@/components/portfolio/TechStack";
import { motion } from "framer-motion";
import Projects from "@/components/portfolio/Projects";
import Navbar from "../Navbar";
import Experience from "@/components/portfolio/Experience";

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

      <Navbar />


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
    
    </main>
  );
}
