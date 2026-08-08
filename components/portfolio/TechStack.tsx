
"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiGithub,
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiNetdata,
  SiHtml5,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: SiReact,
    className: "left-[15%] top-[18%]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "right-[15%] top-[18%]",
  },
  {
    name: "Python",
    icon: SiPython,
    className: "left-[2%] top-[48%]",
  },
  {
    name: "Git",
    icon: SiGit,
    className: "right-[5%] top-[48%]",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    className: "left-[16%] bottom-[20%]",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    className: "right-[16%] bottom-[20%]",
  },
  {
    name: "Data Structures & Algorithms",
    icon: SiNetdata,
    className: "left-[90%] bottom-[6%]",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    className: "left-[100%] bottom-[50%]",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    className: "left-[31%] top-[7%]",
  },
  { 
    name: "Statistics",
    icon: SiNetdata,
    className: "left-[25%] top-[34%]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "right-[31%] top-[7%]",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    className: "left-[30%] bottom-[5%]",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    className: "right-[30%] bottom-[1%]",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="relative min-h-[130vh] z-10 flex h-full w-full items-center justify-center overflow-hidden bg-[#050816] px-6 py-32 text-white md:px-16 lg:px-24"
    >
        {/* ATMOSPHERIC TRANSITION */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-[34vh] overflow-hidden">

  {/* Main haze */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#e9e1d2] via-[#5d5875]/50 to-[#050816]" />
  {/* FLOATING PARTICLES */}
<div className="pointer-events-none absolute left-0 top-[22vh] h-[35vh] w-full overflow-hidden">

  {[...Array(30)].map((_, index) => (
    <motion.span
      key={index}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        x: ["-10%", "10%", "-10%"],
        opacity: [0.15, 0.35, 0.15],
        y: [-10, -60],
      }}
      transition={{
        duration: 3 + (index % 4),
        repeat: Infinity,
        delay: index * 0.15,
        ease: "easeInOut",
      }}
      className="absolute h-1 w-1 rounded-full bg-cyan-200/40"
      style={{
        left: `${(index * 37) % 100}%`,
        top: `${(index * 17) % 100}%`,
      }}
    />
  ))}

</div>

  {/* Soft purple glow */}
  <motion.div
    animate={{
      x: ["-10%", "10%", "-10%"],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute left-[15%] top-12 h-40 w-[450px] rounded-full bg-violet-400/20 blur-[100px]"
  />

  {/* Cyan glow */}
  <motion.div
    animate={{
      x: ["10%", "-10%", "10%"],
      opacity: [0.15, 0.35, 0.15],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-1/4 top-20 h-32 w-80 rounded-full bg-cyan-400/20 blur-[100px]"
  />

</div>
        {/* SMOOTH SECTION TRANSITION */}
<div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-[#e9e1d2] via-[#aaa3a5]/40 via-40% to-transparent" />
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

        <div className="absolute left-[10%] top-[10%] h-[250px] w-[250px] rounded-full bg-violet-500/5 blur-[100px]" />

        <div className="absolute bottom-[10%] right-[10%] h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[100px]" />

      </div>

      <div className="translate-y-15 relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="ml-4 md:ml-12 lg:ml-20"
        >

          <div className="translate-y-2 flex items-center gap-4">
            <span className="h-px w-12 bg-white/30" />

            <span className="font-mono text-xs tracking-[0.3em] text-white/50">
              03 — TECH STACK
            </span>
          </div>

        </motion.div>

        {/* GLOBE CONTAINER */}
        <div className="translate-y-10 relative mx-auto mt-20 h-[650px] w-full max-w-6xl">

          {/* ORBIT 1 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          />

          {/* ORBIT 2 */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
          />

          {/* ORBIT 3 */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/10"
          />

          {/* GLOBE GLOW */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[90px]" />

          {/* GLOBE */}
          <motion.div
            animate={{
              scale: [1, 1.025, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 flex h-60 w-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-cyan-300/30 bg-[#071525] shadow-[0_0_100px_rgba(34,211,238,0.12)] md:h-64 md:w-64"
          >

            {/* GLOBE GRID */}

            <div className="absolute inset-0 opacity-30">

              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-cyan-200/30" />

              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-cyan-200/30" />

              <div className="absolute left-1/2 top-1/2 h-[120%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />

              <div className="absolute left-1/2 top-1/2 h-[120%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" />

            </div>

            {/* GLOBE CONTENT */}

            <div className="relative z-10 text-center">

              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-300/50">
                MY
              </p>

              <p className="mt-1 text-3xl font-medium tracking-tight">
                TECH
              </p>

              <p className="text-3xl font-medium tracking-tight text-white/80">
                STACK
              </p>

            </div>

          </motion.div>

          {/* TECHNOLOGY NODES */}

          {technologies.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  scale: 1.12,
                }}
                className={`absolute ${tech.className} hidden -translate-x-1/2 -translate-y-1/2 md:block`}
              >

                <div className="group flex flex-col items-center gap-2">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300/10 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">

                    <Icon className="h-6 w-6 text-white/50 transition-colors duration-300 group-hover:text-cyan-300" />

                  </div>

                  <span className="font-mono text-[9px] tracking-[0.12em] text-white/30 transition-colors group-hover:text-white/70">
                    {tech.name}
                  </span>

                </div>

              </motion.div>
            );
          })}

          {/* MOBILE TECH GRID */}

          <div className="absolute bottom-0 left-1/2 grid w-full max-w-sm -translate-x-1/2 grid-cols-5 gap-y-6 md:hidden">

            {technologies.map((tech) => {
              const Icon = tech.icon;

              return (
                <div
                  key={tech.name}
                  className="flex flex-col items-center gap-2"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <Icon className="h-4 w-4 text-white/50" />
                  </div>

                  <span className="text-[8px] text-white/30">
                    {tech.name}
                  </span>

                </div>
              );
            })}

          </div>

        </div>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="translate-y-10 mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-white/30"
        >
          A constantly evolving toolkit shaped by projects, experiments,
          hackathons, and everything I build along the way.
        </motion.p>

      </div>
      
    </section>
  );
}

