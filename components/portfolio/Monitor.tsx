"use client";

import Hero from "./Hero";

export default function Monitor() {
  return (
    <div
      className="
      relative
      w-[78vw]
      h-[84vh]
      rounded-2xl
      border
      border-zinc-700
      bg-[#10131C]
      shadow-[0_0_120px_rgba(59,130,246,0.15)]
      overflow-hidden
    ">
      {/* Glass Reflection */}

      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

      {/* Top Bar */}

      <div className="flex items-center h-12 px-5 border-b border-zinc-700 bg-[#161B27]">

        <div className="flex gap-2">

          <div className="w-3 h-3 rounded-full bg-red-500" />

          <div className="w-3 h-3 rounded-full bg-yellow-400" />

          <div className="w-3 h-3 rounded-full bg-green-500" />

        </div>

        <div className="mx-auto text-zinc-300 font-medium">
          Portfolio OS
        </div>

      </div>
      <div className="relative h-full w-full px-10 py-8">
            <Hero />
      </div>
      
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">

        <div className="w-5 h-12 bg-zinc-700 rounded-b-md" />

        <div className="w-40 h-4 rounded-full bg-zinc-800 -ml-[70px]" />

      </div>

    </div>
  );
}