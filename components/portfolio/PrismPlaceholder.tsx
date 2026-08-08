"use client";

import { motion } from "framer-motion";

export default function PrismPlaceholder() {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="relative h-[450px] w-[450px]"
    >
      {/* Main Glass Container */}
      <div className="absolute inset-0 rounded-[32px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-cyan-500/5" />

        {/* Animated Grid */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,211,238,.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,211,238,.15) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
        />

        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
        />

        {/* Center Prism Holder */}
        <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-500/20 bg-black/20 backdrop-blur-md">

          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="text-center"
          >
            <div className="text-6xl">🔷</div>

            <p className="mt-4 text-sm tracking-[0.35em] text-cyan-300 uppercase">
              3D Prism
            </p>

            <p className="mt-2 text-xs text-zinc-500">
              Replace with React Three Fiber
            </p>
          </motion.div>

        </div>

        {/* Corner Dots */}
        {[
          "top-6 left-6",
          "top-6 right-6",
          "bottom-6 left-6",
          "bottom-6 right-6",
        ].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos} h-2 w-2 rounded-full bg-cyan-400/70`}
          />
        ))}

      </div>

      {/* Outer Glow */}
      <div className="absolute inset-0 -z-10 rounded-[32px] bg-cyan-500/10 blur-3xl" />
    </motion.div>
  );
}