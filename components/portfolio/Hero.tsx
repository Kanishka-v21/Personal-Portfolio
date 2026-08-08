"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./Typewriter";
import PrismPlaceholder from "./PrismPlaceholder";

export default function Hero() {
  return (
    <section className="relative z-10 flex h-full w-full items-center justify-center px-8 translate-x-4">

      <div className="absolute left-20 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-20 bottom-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-[140px]" />

      <div className="grid h-full grid-cols-[60%_40%]">

        <motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="flex h-full flex-col justify-center pl-28 pl-12 pr-12"
>
  <div className="flex flex-col gap-8">

    {/* Scholar */}
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="text-sm uppercase tracking-[0.40em] text-cyan-400 font-medium"
    >
      Reliance Foundation Scholar
    </motion.span>

    {/* Intro */}
    <div className="space-y-4">
      <p className="uppercase tracking-[0.4em] text-zinc-500 text-sm">
        Hello, I'm
      </p>

      <h1 className="text-6xl font-black leading-[0.9] text-white">
        Kanishka Pulani
        
      </h1>

      <Typewriter />
    </div>

    {/* Description */}
    <p className="max-w-[42rem] text-lg leading-9 text-zinc-400">
      Passionate Computer Science student building AI-powered
      applications, scalable web platforms, and developer tools that
      solve meaningful real-world problems. I enjoy combining clean
      engineering with thoughtful design to create impactful products.
    </p>

    {/* Buttons */}
    <div className="flex gap-5 pt-2">
      <button className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-400">
        View Projects
      </button>

      <button className="rounded-xl border border-zinc-700 px-8 py-3 text-white transition-all duration-300 hover:border-cyan-400 hover:bg-zinc-900">
        Download Resume
      </button>
    </div>


    <div className="flex items-center gap-8 pt-8 pl-4">
      <a
        href="https://github.com/Kanishka-v21"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="text-[26px] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-white" />
      </a>

      <a
        href="https://www.linkedin.com/in/kanishka-pulani-562464375"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-[26px] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400" />
      </a>

      <a
        href="https://leetcode.com/u/Kanishka_2104/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLeetcode className="text-[26px] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-yellow-400" />
      </a>

      <a
        href="https://www.hackerrank.com/profile/kanishkapulani17"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaHackerrank className="text-[26px] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-green-400" />
      </a>
    </div>

  </div>
</motion.div>

        <motion.div
          initial={{
            opacity: 0,
            scale: .8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: .6,
            duration: 1
          }}
          className="flex items-center justify-center"
        >

          <PrismPlaceholder />

        </motion.div>

      </div>

    </section>
  );
}