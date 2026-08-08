"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex h-full w-full items-center justify-center px-8 translate-x-0 min-h-screen overflow-hidden bg-[#e9e1d2] py-24 text-[#171717] md:px-16 lg:px-24"
    >
      {/* Subtle background detail */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full border border-[#171717]/10" />
      <div className="pointer-events-none absolute -right-20 top-32 h-56 w-56 rounded-full border border-[#171717]/10" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[#171717]/40" />

          <span className="font-mono text-xs tracking-[0.3em]">
            01 — ABOUT
          </span>
        </motion.div>

        {/* Main layout */}
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT — About */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-3xl text-xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
              Building ideas
              <br />
              <span className="italic">into reality.</span>
            </h2>

            <div className="mt-12 max-w-xl">
              <p className="text-lg leading-relaxed text-[#171717]/80 md:text-xl">
                I'm a Computer Science student, currently in the 2nd Year of college, and a developer focused on
                building thoughtful digital experiences and solving
                real-world problems through technology.
              </p>

              <p className="mt-8 leading-relaxed text-[#171717]/60">
                My journey revolves around learning by building. From
                full-stack applications to AI-powered ideas, I enjoy taking
                concepts from the early stages of an idea and turning them
                into something useful, functional, and meaningful.
              </p>

              <p className="mt-6 leading-relaxed text-[#171717]/60">
                I'm continuously exploring new technologies, contributing to
                projects, participating in hackathons, and improving my
                problem-solving skills.
              </p>
            </div>


            {/* Small details */}
            <div className="mt-20 grid max-w-xl grid-cols-2 gap-y-8 translate-y-12
            border-t border-[#171717]/15 pt-14 sm:grid-cols-3">

              <div>
                <p className="font-mono text-xs text-[#171717]/40">
                  FOCUS
                </p>
                <p className="mt-2 text-sm">
                  Full Stack
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-[#171717]/40">
                  EXPLORING
                </p>
                <p className="mt-2 text-sm">
                  AI & Open Source
                </p>
              </div>

              <div>
                <p className="font-mono text-xs text-[#171717]/40">
                  APPROACH
                </p>
                <p className="mt-2 text-sm">
                  Learn · Build · Iterate
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Image frame */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d4c9b8]">

              {/* Temporary placeholder */}
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-center">
                  <div className="absolute inset-0">
  <img
    src="/portrait.jpeg"
    alt="Kanishka Pulani"
    className="h-full w-full object-cover"
  />
</div>

                  <p className="font-mono text-xs tracking-[0.2em] text-[#171717]/40">
                    PORTRAIT
                  </p>

                  <p className="mt-2 text-sm text-[#171717]/40">
                    Image coming soon
                  </p>
                </div>
              </div>

              {/* Corner details */}
              <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-[#171717]/30" />
              <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-[#171717]/30" />
            </div>

            {/* Caption */}
            <div className="mt-5 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">
                  Kanishka Pulani
                </p>
                <p className="mt-1 text-xs text-[#171717]/50">
                  Computer Science · Data Science
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}