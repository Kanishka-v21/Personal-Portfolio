"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 35 }, (_, i) => ({
  id: i,

  left: Math.random() * 100,
  top: Math.random() * 100,

  size: Math.random() * 4 + 1,

  duration: Math.random() * 10 + 8,

  delay: Math.random() * 8,

  opacity: Math.random() * 0.5 + 0.2,
}));

export default function DustParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-cyan-100"

          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            filter: "blur(1px)",
          }}

          animate={{
            y: [-10, -140],
            x: [-6, 6, -4, 4],
            opacity: [
              0,
              particle.opacity,
              particle.opacity,
              0,
            ],
            scale: [0.8, 1.2, 1],
          }}

          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}