"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-40 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-cyan-400">
          07 / Contact
        </p>

        <h2 className="mx-auto max-w-5xl text-6xl font-bold leading-none md:text-8xl">
          LET'S BUILD
          <br />
          <span className="text-outline">SOMETHING.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-7 text-gray-400">
          Have an idea, opportunity or project in mind? Let's turn it into
          something meaningful.
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:your@email.com"
          className="mx-auto mt-10 flex w-fit items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-medium text-black"
        >
          <Mail size={18} />
          GET IN TOUCH
          <ArrowUpRight size={18} />
        </motion.a>
      </div>
    </section>
  );
}