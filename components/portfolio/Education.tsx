"use client";

import { motion } from "framer-motion";
import Monitor from "./Monitor";

const education = [
  {
    period: "2024 — PRESENT",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Your College Name",
    location: "Delhi, India",
    description:
      "Currently pursuing my undergraduate degree with a focus on software development, data science, problem solving, and emerging technologies.",
    current: true,
  },
  {
    period: "2022 — 2024",
    degree: "Senior Secondary Education",
    institution: "Your School Name",
    location: "Delhi, India",
    description:
      "Completed senior secondary education with a focus on mathematics, science, and computer science.",
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-[#e9e1d2] px-6 py-28 text-[#171717] md:px-16 lg:px-24"
    >
        
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#171717]/40" />

            <span className="font-mono text-xs tracking-[0.3em]">
              02 — EDUCATION
            </span>
          </div>

          <h2 className="mt-8 max-w-3xl text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Where the
            <br />
            <span className="italic">journey began.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 hidden h-full w-px bg-[#171717]/15 md:block" />

          <div className="space-y-20">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className="relative grid gap-8 md:grid-cols-[180px_1fr]"
              >

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 border-[#e9e1d2] bg-[#171717] md:block" />

                {/* Date */}
                <div className="pl-8">
                  <p className="font-mono text-xs tracking-[0.15em] text-[#171717]/50">
                    {item.period}
                  </p>
                </div>

                {/* Content */}
                <div className="border-t border-[#171717]/15 pt-6 md:pl-8 md:pt-0 md:border-t-0">
                  <div className="flex flex-wrap items-start justify-between gap-4">

                    <div>
                      <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                        {item.degree}
                      </h3>

                      <p className="mt-3 text-sm font-medium text-[#171717]/70">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm text-[#171717]/40">
                        {item.location}
                      </p>
                    </div>

                    {item.current && (
                      <span className="rounded-full border border-[#171717]/20 px-4 py-2 font-mono text-[10px] tracking-[0.15em]">
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="mt-8 max-w-2xl leading-relaxed text-[#171717]/60">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}