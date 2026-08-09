"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  User,
  Code2,
  BookOpen,
  Globe2,
  ExternalLink,
  Minimize2,
  Maximize2,
  X,
  ChevronRight,
  Cpu,
  Sparkles,
} from "lucide-react";

const apps = [
  {
    id: "about",
    label: "ABOUT",
    icon: User,
  },
  {
    id: "build",
    label: "BUILD",
    icon: Code2,
  },
  {
    id: "learn",
    label: "LEARN",
    icon: BookOpen,
  },
  {
    id: "explore",
    label: "EXPLORE",
    icon: Globe2,
  },
];

const skills = [
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "DSA",
];

export default function DeveloperOS() {
  const [activeApp, setActiveApp] = useState("about");
  const [terminalOpen, setTerminalOpen] = useState(true);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#05090d]
        px-5
        py-28
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
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-400/[0.025]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl">

        <div className="flex items-center gap-3">

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-cyan-400
              shadow-[0_0_14px_rgba(34,211,238,.9)]
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
            Developer OS
          </span>

        </div>


        <div
          className="
            mt-8
            flex
            flex-col
            gap-6
            md:flex-row
            md:items-end
            md:justify-between
          "
        >

          <h2
            className="
              max-w-4xl
              text-5xl
              font-light
              leading-[0.95]
              tracking-[-0.055em]
              md:text-7xl
            "
          >
            The developer
            <span className="ml-3 text-gray-600 italic">
              behind the code.
            </span>
          </h2>


          <p
            className="
              max-w-sm
              text-sm
              leading-7
              text-gray-600
            "
          >
            A small window into how I build,
            learn, experiment and explore.
          </p>

        </div>


        {/* ===================================================
            OS WINDOW
        =================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.08]
            bg-[#080d12]/95
            shadow-[0_40px_120px_rgba(0,0,0,.45)]
          "
        >

          {/* =================================================
              WINDOW BAR
          ================================================= */}

          <div
            className="
              flex
              h-14
              items-center
              justify-between
              border-b
              border-white/[0.06]
              bg-[#0a1016]
              px-5
            "
          >

            <div className="flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/60" />

            </div>


            <div
              className="
                flex
                items-center
                gap-2
                font-mono
                text-[9px]
                tracking-[0.2em]
                text-gray-600
              "
            >
              <Cpu size={12} />

              KANISHKA_OS

            </div>


            <div className="flex items-center gap-3 text-gray-700">

              <Minimize2 size={13} />
              <Maximize2 size={13} />

              <X size={14} />

            </div>

          </div>


          {/* =================================================
              OS BODY
          ================================================= */}

          <div className="grid min-h-[620px] md:grid-cols-[190px_1fr]">

            {/* =================================================
                SIDEBAR
            ================================================= */}

            <aside
              className="
                border-b
                border-white/[0.06]
                bg-[#070c11]
                p-4
                md:border-b-0
                md:border-r
              "
            >

              <div
                className="
                  mb-5
                  px-3
                  text-[8px]
                  uppercase
                  tracking-[0.35em]
                  text-gray-700
                "
              >
                Applications
              </div>


              <div className="space-y-1">

                {apps.map((app) => {

                  const Icon = app.icon;
                  const active = activeApp === app.id;

                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveApp(app.id)}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        transition-all
                        duration-300

                        ${
                          active
                            ? "bg-cyan-400/[0.08] text-cyan-400"
                            : "text-gray-600 hover:bg-white/[0.03] hover:text-gray-400"
                        }
                      `}
                    >

                      <Icon size={15} />

                      <span
                        className="
                          text-[9px]
                          font-medium
                          tracking-[0.15em]
                        "
                      >
                        {app.label}
                      </span>

                      {active && (
                        <motion.span
                          layoutId="activeDot"
                          className="
                            ml-auto
                            h-1
                            w-1
                            rounded-full
                            bg-cyan-400
                            shadow-[0_0_8px_rgba(34,211,238,.9)]
                          "
                        />
                      )}

                    </button>
                  );
                })}

              </div>


              {/* status */}

              <div
                className="
                  mt-10
                  rounded-xl
                  border
                  border-white/[0.06]
                  bg-white/[0.02]
                  p-4
                "
              >

                <div className="flex items-center gap-2">

                  <span
                    className="
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-green-400
                      shadow-[0_0_10px_rgba(74,222,128,.8)]
                    "
                  />

                  <span
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.25em]
                      text-gray-600
                    "
                  >
                    Online
                  </span>

                </div>


                <p
                  className="
                    mt-3
                    font-mono
                    text-[9px]
                    text-gray-700
                  "
                >
                  system.ready()
                </p>

              </div>

            </aside>


            {/* =================================================
                MAIN WINDOW
            ================================================= */}

            <div className="relative flex flex-col">

              {/* top bar */}

              <div
                className="
                  flex
                  h-12
                  items-center
                  justify-between
                  border-b
                  border-white/[0.06]
                  px-6
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    font-mono
                    text-[9px]
                    text-gray-700
                  "
                >

                  <span className="text-cyan-400">
                    ~
                  </span>

                  /developer

                </div>


                <span
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]
                    text-gray-700
                  "
                >
                  v1.0.26
                </span>

              </div>


              {/* content */}

              <div className="relative flex-1 p-6 md:p-10">

                <AnimatePresence mode="wait">

                  {activeApp === "about" && (
                    <AboutWindow key="about" />
                  )}

                  {activeApp === "build" && (
                    <BuildWindow key="build" />
                  )}

                  {activeApp === "learn" && (
                    <LearnWindow key="learn" />
                  )}

                  {activeApp === "explore" && (
                    <ExploreWindow key="explore" />
                  )}

                </AnimatePresence>


                {/* =================================================
                    TERMINAL
                ================================================= */}

                <AnimatePresence>

                  {terminalOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 30,
                      }}
                      className="
                        absolute
                        bottom-6
                        right-6
                        hidden
                        w-[320px]
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-[#05090d]/95
                        shadow-[0_25px_70px_rgba(0,0,0,.5)]
                        lg:block
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          border-b
                          border-white/[0.06]
                          px-4
                          py-3
                        "
                      >

                        <div className="flex items-center gap-2">

                          <Terminal
                            size={13}
                            className="text-cyan-400"
                          />

                          <span
                            className="
                              text-[8px]
                              uppercase
                              tracking-[0.25em]
                              text-gray-600
                            "
                          >
                            terminal
                          </span>

                        </div>


                        <button
                          onClick={() => setTerminalOpen(false)}
                          className="text-gray-700 hover:text-gray-400"
                        >
                          <X size={13} />
                        </button>

                      </div>


                      <div
                        className="
                          space-y-2
                          p-4
                          font-mono
                          text-[9px]
                          leading-5
                        "
                      >

                        <p className="text-gray-700">
                          $ whoami
                        </p>

                        <p className="text-gray-400">
                          kanishka@developer
                        </p>

                        <p className="text-gray-700">
                          $ status
                        </p>

                        <p className="text-cyan-400">
                          ● building something new...
                        </p>

                        <p className="text-gray-700">
                          $ _
                        </p>

                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>


              {/* =================================================
                  FOOTER
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-white/[0.06]
                  px-6
                  py-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    font-mono
                    text-[8px]
                    text-gray-700
                  "
                >

                  <span className="text-cyan-400">
                    $
                  </span>

                  always_learning

                </div>


                <div className="flex gap-4">
                  <a
                    href="https://leetcode.com/u/Kanishka_2104/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-600
                      transition-colors
                      hover:text-cyan-400
                    "
                  >
                    <Code2 size={12} />
                    LeetCode
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          END LINE
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          mt-20
          flex
          max-w-7xl
          items-center
          justify-between
          border-t
          border-white/[0.06]
          pt-6
        "
      >

        <span
          className="
            text-[8px]
            uppercase
            tracking-[0.35em]
            text-gray-700
          "
        >
          End of process
        </span>


        <Sparkles
          size={15}
          className="text-cyan-400/40"
        />

      </div>

    </section>
  );
}


/* =============================================================
   ABOUT
============================================================= */

function AboutWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.25 }}
    >

      <span className="text-[9px] uppercase tracking-[0.35em] text-cyan-400">
        01 / About
      </span>


      <h3
        className="
          mt-6
          max-w-2xl
          text-4xl
          font-light
          leading-tight
          tracking-[-0.04em]
          md:text-5xl
        "
      >
        Curious by nature.
        <br />
        <span className="text-gray-600">
          Builder by choice.
        </span>
      </h3>


      <p
        className="
          mt-8
          max-w-2xl
          text-sm
          leading-7
          text-gray-500
        "
      >
        I'm a Computer Science student who enjoys turning ideas
        into real products. I like understanding how things work,
        experimenting with technology and constantly improving
        the way I build.
      </p>


      <div className="mt-10 flex flex-wrap gap-2">

        {["CSE", "Developer", "Builder", "Problem Solver"].map(
          (item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.02]
                px-4
                py-2
                text-[8px]
                uppercase
                tracking-[0.2em]
                text-gray-600
              "
            >
              {item}
            </span>
          )
        )}

      </div>

    </motion.div>
  );
}


/* =============================================================
   BUILD
============================================================= */

function BuildWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.25 }}
    >

      <span className="text-[9px] uppercase tracking-[0.35em] text-cyan-400">
        02 / Build
      </span>


      <h3
        className="
          mt-6
          text-4xl
          font-light
          tracking-[-0.04em]
          md:text-5xl
        "
      >
        Things I
        <span className="ml-2 text-gray-600 italic">
          build.
        </span>
      </h3>


      <div className="mt-10 grid gap-3 sm:grid-cols-2">

        <BuildCard
          number="01"
          title="Virtual Queue"
          text="My first complete software project."
        />

        <BuildCard
          number="02"
          title="Portfolio"
          text="A cinematic space to document my journey."
        />

        <BuildCard
          number="03"
          title="Hackathons"
          text="Turning ideas into products with a team."
        />

        <BuildCard
          number="04"
          title="Experiments"
          text="Small ideas that teach something new."
        />

      </div>

    </motion.div>
  );
}


function BuildCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-white/[0.06]
        bg-white/[0.015]
        p-5
        transition-all
        duration-300
        hover:border-cyan-400/20
        hover:bg-cyan-400/[0.02]
      "
    >

      <span className="font-mono text-[9px] text-gray-700">
        {number}
      </span>

      <h4 className="mt-5 text-lg font-medium text-gray-300">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-6 text-gray-600">
        {text}
      </p>

      <ChevronRight
        size={14}
        className="
          mt-5
          text-gray-700
          transition-all
          group-hover:translate-x-1
          group-hover:text-cyan-400
        "
      />

    </div>
  );
}


/* =============================================================
   LEARN
============================================================= */

function LearnWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.25 }}
    >

      <span className="text-[9px] uppercase tracking-[0.35em] text-cyan-400">
        03 / Learn
      </span>


      <h3
        className="
          mt-6
          text-4xl
          font-light
          tracking-[-0.04em]
          md:text-5xl
        "
      >
        Always
        <span className="ml-2 text-gray-600 italic">
          learning.
        </span>
      </h3>


      <p className="mt-6 max-w-xl text-sm leading-7 text-gray-500">
        The stack keeps changing. The goal is to keep
        understanding what's underneath it.
      </p>


      <div className="mt-10 flex flex-wrap gap-2">

        {skills.map((skill, index) => (

          <motion.span
            key={skill}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.05,
            }}
            className="
              rounded-lg
              border
              border-white/[0.07]
              bg-white/[0.02]
              px-4
              py-2.5
              font-mono
              text-[9px]
              text-gray-500
              transition-colors
              hover:border-cyan-400/20
              hover:text-cyan-400
            "
          >
            {skill}
          </motion.span>

        ))}

      </div>

    </motion.div>
  );
}


/* =============================================================
   EXPLORE
============================================================= */

function ExploreWindow() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.25 }}
    >

      <span className="text-[9px] uppercase tracking-[0.35em] text-cyan-400">
        04 / Explore
      </span>


      <h3
        className="
          mt-6
          text-4xl
          font-light
          tracking-[-0.04em]
          md:text-5xl
        "
      >
        Beyond the
        <span className="ml-2 text-gray-600 italic">
          code.
        </span>
      </h3>


      <div className="mt-10 space-y-3">

        <ExploreItem
          title="Open Source"
          text="Learning by contributing and collaborating."
        />

        <ExploreItem
          title="Hackathons"
          text="Building under pressure and shipping ideas."
        />

        <ExploreItem
          title="Problem Solving"
          text="Sharpening DSA one problem at a time."
        />

        <ExploreItem
          title="Content"
          text="Sharing what I learn with others."
        />

      </div>

    </motion.div>
  );
}


function ExploreItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-white/[0.06]
        px-5
        py-4
        transition-all
        hover:border-cyan-400/20
        hover:bg-white/[0.02]
      "
    >

      <div>

        <h4 className="text-sm text-gray-300">
          {title}
        </h4>

        <p className="mt-1 text-[10px] text-gray-700">
          {text}
        </p>

      </div>


      <ExternalLink
        size={14}
        className="
          text-gray-700
          transition-colors
          group-hover:text-cyan-400
        "
      />

    </div>
  );
}