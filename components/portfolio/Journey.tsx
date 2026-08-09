"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Rocket,
  Sparkles,
  Trophy,
  GitBranch,
} from "lucide-react";

const journey = [
  {
    id: "01",
    year: "2025",
    title: "THE BEGINNING",
    subtitle: "Computer Science",
    description:
      "The beginning of my journey into Computer Science, programming and problem solving.",
    icon: Code2,
    position: "left",
  },
  {
    id: "02",
    year: "2025",
    title: "FIRST BUILD",
    subtitle: "Virtual Queue Management",
    description:
      "My first complete project, built to make queue management faster and more efficient.",
    icon: Rocket,
    position: "right",
  },
  {
    id: "03",
    year: "2026",
    title: "BUILDING MORE",
    subtitle: "Web • UI • Experiments",
    description:
      "Exploring modern web development and building projects that solve real problems.",
    icon: Sparkles,
    position: "left",
  },
  {
    id: "04",
    year: "2026",
    title: "HACKATHONS",
    subtitle: "Ideas → Products",
    description:
      "Learning to turn ideas into working products while collaborating with a team under pressure.",
    icon: Trophy,
    position: "right",
  },
  {
    id: "05",
    year: "NOW",
    title: "OPEN SOURCE",
    subtitle: "Building in public",
    description:
      "Exploring open source, collaboration and contributing to the developer community.",
    icon: GitBranch,
    position: "left",
  },
];

export default function Journey() {
  const [active, setActive] = useState("01");

  const activeItem =
    journey.find((item) => item.id === active) || journey[0];

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#05080c]
        px-6
        pb-32
        pt-28
        text-white
        md:px-10
        lg:px-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[5%]
          h-[700px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-cyan-400/[0.035]
          blur-[160px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-200px]
          left-[-150px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/[0.025]
          blur-[150px]
        "
      />

      {/* subtle grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)]
          [background-size:90px_90px]
        "
      />


      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="relative mx-auto max-w-7xl">

        <div className="flex items-center gap-3">

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_15px_rgba(34,211,238,.9)]
            "
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.45em]
              text-gray-600
            "
          >
            04 / Journey
          </span>

        </div>


        <div
          className="
            mt-8
            flex
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-end
          "
        >

          <h1
            className="
              text-6xl
              font-light
              leading-[0.9]
              tracking-[-0.06em]
              text-white
              md:text-8xl
              lg:text-[105px]
            "
          >
            The
            <span className="ml-3 text-gray-600 italic">
              Journey
            </span>
          </h1>


          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-gray-600
            "
          >
            A path through the projects, experiments,
            challenges and moments that shaped the developer
            I'm becoming.
          </p>

        </div>

      </section>


      {/* =====================================================
          JOURNEY MAP
      ===================================================== */}

      <section
        className="
          relative
          mx-auto
          mt-24
          max-w-[1200px]
        "
      >

        {/* ===================================================
            SVG PATH
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            hidden
            h-[1250px]
            w-full
            -translate-x-1/2
            md:block
          "
        >

          <svg
            viewBox="0 0 1200 1250"
            className="
              absolute
              inset-0
              h-full
              w-full
              overflow-visible
            "
            fill="none"
          >

            {/* outer dim path */}

            <path
              d="
                M 600 20
                C 600 100 600 120 430 180
                C 250 245 250 330 500 380
                C 850 450 930 530 720 620
                C 500 710 260 770 390 850
                C 520 930 900 930 790 1030
                C 720 1090 620 1120 600 1230
              "
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="2"
            />


            {/* glowing route */}

            <motion.path
              d="
                M 600 20
                C 600 100 600 120 430 180
                C 250 245 250 330 500 380
                C 850 450 930 530 720 620
                C 500 710 260 770 390 850
                C 520 930 900 930 790 1030
                C 720 1090 620 1120 600 1230
              "
              stroke="url(#journeyGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="10 14"
              animate={{
                strokeDashoffset: [0, -100],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />


            <defs>

              <linearGradient
                id="journeyGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="rgba(34,211,238,0)"
                />

                <stop
                  offset="20%"
                  stopColor="rgba(34,211,238,.8)"
                />

                <stop
                  offset="50%"
                  stopColor="rgba(34,211,238,.35)"
                />

                <stop
                  offset="80%"
                  stopColor="rgba(34,211,238,.7)"
                />

                <stop
                  offset="100%"
                  stopColor="rgba(34,211,238,0)"
                />

              </linearGradient>

            </defs>

          </svg>

        </div>


        {/* ===================================================
            MOBILE PATH
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-4
            top-0
            h-full
            w-px
            bg-gradient-to-b
            from-transparent
            via-cyan-400/40
            to-transparent
            md:hidden
          "
        />


        {/* ===================================================
            NODES
        =================================================== */}

        <div
          className="
            relative
            flex
            flex-col
            gap-24
            md:gap-0
          "
        >

          {journey.map((item, index) => {

            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <div
                key={item.id}
                className={`
                  relative
                  h-auto
                  md:h-[250px]

                  ${
                    index === 0
                      ? "md:mt-0"
                      : ""
                  }
                `}
              >

                {/* =================================================
                    NODE
                ================================================= */}

                <motion.button
                  onClick={() => setActive(item.id)}

                  whileHover={{
                    scale: 1.12,
                  }}

                  whileTap={{
                    scale: 0.92,
                  }}

                  className="
                    absolute
                    left-4
                    top-8
                    z-30
                    -translate-x-1/2

                    md:left-1/2
                  "
                >

                  {/* expanding ring */}

                  {isActive && (
                    <motion.span
                      layoutId="activePulse"
                      className="
                        absolute
                        inset-[-13px]
                        rounded-full
                        border
                        border-cyan-400/20
                      "
                    />
                  )}


                  <span
                    className={`
                      relative
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      bg-[#05080c]
                      transition-all
                      duration-500

                      ${
                        isActive
                          ? "border-cyan-400/60 shadow-[0_0_30px_rgba(34,211,238,.35)]"
                          : "border-white/10"
                      }
                    `}
                  >

                    <Icon
                      size={17}
                      strokeWidth={1.5}
                      className={
                        isActive
                          ? "text-cyan-400"
                          : "text-gray-600"
                      }
                    />

                  </span>

                </motion.button>


                {/* =================================================
                    CHIP
                ================================================= */}

                <motion.button
                  onClick={() => setActive(item.id)}

                  initial={{
                    opacity: 0,
                    y: 20,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                    margin: "-100px",
                  }}

                  whileHover={{
                    y: -5,
                  }}

                  className={`
                    absolute
                    top-0
                    z-20
                    w-[calc(100%-55px)]
                    max-w-[420px]

                    rounded-2xl
                    border

                    px-5
                    py-5

                    text-left

                    transition-all
                    duration-500

                    md:w-[390px]

                    ${
                      item.position === "left"
                        ? "left-10 md:left-[calc(50%-480px)]"
                        : "left-10 md:left-[calc(50%+90px)]"
                    }

                    ${
                      isActive
                        ? "border-cyan-400/20 bg-[#0a141b]/95 shadow-[0_20px_70px_rgba(0,0,0,.35)]"
                        : "border-white/[0.07] bg-[#080e14]/80 hover:border-white/[0.14]"
                    }
                  `}
                >

                  {/* chip top */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                      <span
                        className={`
                          font-mono
                          text-[9px]
                          tracking-[0.25em]

                          ${
                            isActive
                              ? "text-cyan-400"
                              : "text-gray-700"
                          }
                        `}
                      >
                        {item.id}
                      </span>

                      <span
                        className="
                          h-px
                          w-8
                          bg-white/10
                        "
                      />

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-gray-600
                        "
                      >
                        {item.year}
                      </span>

                    </div>


                    <ArrowUpRight
                      size={15}
                      className={`
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "-translate-y-1 translate-x-1 text-cyan-400"
                            : "text-gray-700"
                        }
                      `}
                    />

                  </div>


                  {/* title */}

                  <h2
                    className={`
                      mt-5
                      text-xl
                      font-medium
                      tracking-[-0.02em]

                      ${
                        isActive
                          ? "text-white"
                          : "text-gray-300"
                      }
                    `}
                  >
                    {item.title}
                  </h2>


                  <p
                    className="
                      mt-1.5
                      text-xs
                      text-gray-600
                    "
                  >
                    {item.subtitle}
                  </p>


                  {/* active content */}

                  <AnimatePresence>

                    {isActive && (

                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}

                        animate={{
                          opacity: 1,
                          height: "auto",
                        }}

                        exit={{
                          opacity: 0,
                          height: 0,
                        }}

                        transition={{
                          duration: 0.3,
                        }}

                        className="overflow-hidden"
                      >

                        <p
                          className="
                            mt-5
                            border-t
                            border-white/[0.06]
                            pt-5
                            text-xs
                            leading-6
                            text-gray-500
                          "
                        >
                          {item.description}
                        </p>

                      </motion.div>

                    )}

                  </AnimatePresence>


                  {/* bottom chip indicator */}

                  <div className="mt-5 flex items-center gap-2">

                    <span
                      className={`
                        h-1
                        w-1
                        rounded-full

                        ${
                          isActive
                            ? "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,.8)]"
                            : "bg-gray-700"
                        }
                      `}
                    />

                    <span
                      className="
                        text-[8px]
                        uppercase
                        tracking-[0.3em]
                        text-gray-700
                      "
                    >
                      {isActive
                        ? "Current chapter"
                        : "Explore chapter"}
                    </span>

                  </div>

                </motion.button>

              </div>
            );
          })}

        </div>


        {/* ===================================================
            END POINT
        =================================================== */}

        <div
          className="
            relative
            z-30
            mt-4
            flex
            flex-col
            items-center
            md:mt-0
          "
        >

          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              border
              border-cyan-400/20
              bg-[#05080c]
              shadow-[0_0_30px_rgba(34,211,238,.08)]
            "
          >

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-cyan-400
                shadow-[0_0_15px_rgba(34,211,238,1)]
              "
            />

          </div>


          <span
            className="
              mt-5
              text-[8px]
              uppercase
              tracking-[0.4em]
              text-gray-700
            "
          >
            More to come
          </span>

        </div>

      </section>


      {/* =====================================================
          CURRENT CHAPTER
      ===================================================== */}

      <section
        className="
          relative
          mx-auto
          mt-36
          max-w-7xl
          border-t
          border-white/[0.07]
          pt-10
        "
      >

        <div
          className="
            flex
            flex-col
            justify-between
            gap-6
            md:flex-row
            md:items-end
          "
        >

          <div>

            <span
              className="
                text-[9px]
                uppercase
                tracking-[0.4em]
                text-gray-700
              "
            >
              Currently
            </span>

            <h3
              className="
                mt-4
                text-3xl
                font-light
                tracking-[-0.03em]
                text-white
                md:text-5xl
              "
            >
              {activeItem.title}
            </h3>

          </div>


          <div
            className="
              font-mono
              text-[10px]
              tracking-[0.25em]
              text-gray-700
            "
          >
            {activeItem.year} / {activeItem.id}
          </div>

        </div>

      </section>

    </main>
  );
}
