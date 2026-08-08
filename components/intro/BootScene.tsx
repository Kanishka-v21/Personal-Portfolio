"use client";

import { motion } from "framer-motion";
import Desk from "./Desk";
import Monitor from "./Monitor";
import DustParticles from "./DustParticles";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function BootScene() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/portfolio");
    }, 6000); // adjust timing

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-[#050816]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            <div className="scan-lines"></div>
        </div>

      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 0.08) 1px, transparent 1px)`,
        backgroundSize: "45px 45px"
      }} />
         {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} 
            className="absolute rounded-full bg-cyan-400/20 blur-xl"
            style={{width: `${8+(i%5)*4} px`, 
        height: `$[8 + (i % 5) *4} px`,
        top: `${(i * 31) % 100}%`,
        left: `${(i * 17) % 100}%`,
        animation: `float ${5 + (i % 4)}s ease-in-out infinite`,
        animationDelay: `${i * 0.2}s`
        }} />
         ))}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        className="absolute bottom-0 w-full flex justify-center"
      >
        <div className="relative w-[1000px] h-[450px]">
          <Desk />
          <Monitor />
          <DustParticles />
        </div>
      </motion.div>
    
    </main>
  );
}