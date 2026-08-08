"use client";

import Background from "./Background";
import Monitor from "./Monitor";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/About";
import Education from "@/components/portfolio/Education";
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

      {/* About */}
      <section className="w-full">
        <About />
      </section>

      {/* Education */}
      <section className="w-full">
        <Education />
      </section>
    </main>
  );
}