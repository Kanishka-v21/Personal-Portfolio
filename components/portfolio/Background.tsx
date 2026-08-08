"use client";

import AnimatedGrid from "./AnimatedGrid";
import CodeBackground from "./CodeBackground";
import FloatingParticles from "./FloatingParticles";

export default function Background() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-[#04060D] via-[#0B1020] to-[#04060D]" />

      <AnimatedGrid />

      <CodeBackground />

      <FloatingParticles />
    </>
  );
}