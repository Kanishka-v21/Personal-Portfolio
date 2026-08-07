"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AIScanner from "./AIScanner";
import DustParticles from "./DustParticles";

const code = [
  "const developer = {",
  '  name: "Kanishka",',
  '  passion: "Software Engineering",',
  '  focus: ["AI", "Web", "Open Source"....],',
  "};",
  "",
  "developer.buildFuture();",
];

export default function Monitor() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    const text = code.join("\n");

    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;

      if (i > text.length) {
        clearInterval(interval);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="absolute bottom-36 left-1/2 -translate-x-1/2">

      <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-3xl scale-110" />

      <div className="relative h-[360px] w-[620px] rounded-xl border border-zinc-700 bg-[#111827] shadow-2xl overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />


        <div className="flex items-center gap-2 px-4 h-10 bg-[#1b2433] border-b border-zinc-700">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-500" />

          <div className="ml-4 text-xs text-zinc-400">
            portfolio.tsx
          </div>
        </div>

        {/* Editor */}

        <div className="flex h-full">

    {/* Code Editor */}

    <div className="w-[70%] p-6 relative">

        <pre className="font-mono text-[15px] leading-7 text-cyan-300 whitespace-pre-wrap">
            {display}
            <span className="animate-pulse text-white">|</span>
        </pre>

    </div>

    <AIScanner />
        <div className="relative h-full bg-[#0f172a] p-6 overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "120%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="absolute left-0 right-0 h-20 bg-cyan-400/5 blur-xl"
          />
        </div>
    </div>

        <div className="absolute bottom-0 left-0 right-0 h-7 bg-blue-700 flex items-center justify-between px-4 text-[11px] text-white">

          <span>TypeScript</span>

          <span>UTF-8</span>

          <span>Ln 18, Col 5</span>

        </div>
      </div>

    </motion.div>
  );
}