"use client";

import { motion } from "framer-motion";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["GitHub", "#github"],
  ["LeetCode", "#leetcode"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.1 }}
      className="fixed left-1/2 top-6 z-50 w-[92%] max-w-5xl -translate-x-1/2"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl">
        <a
          href="#home"
          className="text-lg font-bold tracking-widest text-cyan-400"
        >
          DEV.
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-xs text-gray-400 transition hover:text-white"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400/40 px-4 py-2 text-xs text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
        >
          LET'S TALK
        </a>
      </div>
    </motion.nav>
  );
}