"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, GitBranch, Github, Star } from "lucide-react";

export default function GitHub() {
  return (
    <section
      id="github"
      className="relative px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
          05 / GitHub
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h2 className="text-5xl font-bold md:text-7xl">
            CODE IN
            <br />
            <span className="text-outline">PUBLIC.</span>
          </h2>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 text-sm text-gray-400 transition hover:text-cyan-400"
          >
            VIEW GITHUB
            <ArrowUpRight
              size={18}
              className="transition group-hover:rotate-45"
            />
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <Stat icon={<Github />} number="50+" label="Repositories" />
          <Stat icon={<GitBranch />} number="100+" label="Contributions" />
          <Stat icon={<Star />} number="10+" label="Stars" />
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-500">
            Contribution Activity
          </p>

          <div className="grid grid-cols-12 gap-2 md:grid-cols-24">
            {Array.from({ length: 96 }).map((_, index) => (
              <div
                key={index}
                className={`aspect-square rounded-sm ${
                  index % 7 === 0
                    ? "bg-cyan-400/80"
                    : index % 5 === 0
                    ? "bg-cyan-400/40"
                    : index % 3 === 0
                    ? "bg-cyan-400/20"
                    : "bg-white/5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon, number, label }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
    >
      <div className="text-cyan-400">{icon}</div>

      <div className="mt-10 text-4xl font-bold">
        {number}
      </div>

      <p className="mt-2 text-sm text-gray-500">{label}</p>
    </motion.div>
  );
}