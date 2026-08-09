"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import {
  ArrowUpRight,
} from "lucide-react";

const navItems = [
  {
    number: "01",
    label: "Education",
    href: "/education",
  },
  {
    number: "02",
    label: "Journey",
    href: "/#projects",
  },
  {
    number: "03",
    label: "More",
    href: "/#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <header className="fixed left-0 right-0 top-0 z-[100] pointer-events-none">

        <div className="mx-auto flex max-w-[1400px] justify-between px-6 py-6 md:px-10">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="
              pointer-events-auto
              group
              relative
              flex
              h-12
              w-12
              items-center
              justify-center
            "
          >

            {/* Outer orbit */}

            <motion.span
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                inset-0
                rounded-full
                border
                border-white/10
              "
            >

              <span
                className="
                  absolute
                  -right-[2px]
                  top-1/2
                  h-1.5
                  w-1.5
                  -translate-y-1/2
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_12px_rgba(34,211,238,.8)]
                "
              />

            </motion.span>


            {/* Main circle */}

            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-[#071018]/70
                shadow-[0_10px_40px_rgba(0,0,0,.25)]
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:border-cyan-400/40
                group-hover:shadow-[0_0_30px_rgba(34,211,238,.12)]
              "
            >

              <span
                className="
                  text-sm
                  font-medium
                  tracking-wide
                  text-white
                "
              >
                K
              </span>

            </div>

          </Link>


          {/* =================================================
              EXPLORE BUTTON
          ================================================= */}

          <div className="pointer-events-auto">

            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.94 }}

              className={`
                relative
                flex
                h-12
                items-center
                gap-3
                rounded-full
                border
                px-6
                transition-all
                duration-500

                ${
                  open
                    ? "border-cyan-400/30 bg-[#071018]/90"
                    : "border-white/10 bg-[#071018]/55"
                }

                backdrop-blur-xl
              `}
            >

              {/* Menu text */}

              <span
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-gray-400
                "
              >
                {open ? "Close" : "Explore"}
              </span>


              {/* Animated icon */}

              <div className="relative h-5 w-5">

                <motion.span
                  animate={{
                    rotate: open ? 45 : 0,
                    y: open ? 8 : 3,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-5
                    bg-white
                  "
                />

                <motion.span
                  animate={{
                    rotate: open ? -45 : 0,
                    y: open ? 8 : 11,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-5
                    bg-white
                  "
                />

              </div>

            </motion.button>


            {/* =================================================
                EXPANDED MENU
            ================================================= */}

            <AnimatePresence>

              {open && (

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    y: -18,
                    transformOrigin: "top right",
                  }}

                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}

                  exit={{
                    opacity: 0,
                    scale: 0.94,
                    y: -18,
                  }}

                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}

                  className="
                    absolute
                    right-6
                    top-[82px]

                    w-[320px]
                    min-h-[440px]

                    overflow-hidden
                    rounded-2xl

                    border
                    border-white/10

                    bg-[#071018]/95

                    px-5
                    py-6

                    shadow-[0_30px_100px_rgba(0,0,0,.45)]
                    backdrop-blur-2xl

                    md:right-10
                  "
                >

                  {/* =================================================
                      MENU HEADER
                  ================================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      px-3
                      pb-5
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        uppercase
                        tracking-[0.4em]
                        text-gray-500
                      "
                    >
                      Navigation
                    </span>

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-cyan-400
                        shadow-[0_0_14px_rgba(34,211,238,.9)]
                      "
                    />

                  </div>


                  {/* =================================================
                      NAVIGATION ITEMS
                  ================================================= */}

                  <div className="space-y-3">

                    {navItems.map((item, index) => (

                      <motion.div
                        key={item.label}

                        initial={{
                          opacity: 0,
                          x: 20,
                        }}

                        animate={{
                          opacity: 1,
                          x: 0,
                        }}

                        transition={{
                          delay: index * 0.08,
                          duration: 0.35,
                        }}
                      >

                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}

                          className="
                            group
                            relative

                            flex
                            min-h-[100px]

                            items-center
                            gap-6

                            overflow-hidden
                            rounded-2xl

                            border
                            border-transparent

                            px-5
                            py-5

                            transition-all
                            duration-300

                            hover:border-white/[0.06]
                            hover:bg-white/[0.045]
                          "
                        >

                          {/* Cyan hover line */}

                          <span
                            className="
                              absolute
                              left-0
                              top-1/2

                              h-10
                              w-[2px]

                              -translate-y-1/2

                              rounded-full

                              bg-cyan-400

                              opacity-0

                              shadow-[0_0_15px_rgba(34,211,238,.8)]

                              transition-all
                              duration-300

                              group-hover:opacity-100
                            "
                          />


                          {/* Number */}

                          <span
                            className="
                              font-mono
                              text-[11px]
                              tracking-wider
                              text-gray-600

                              transition-colors
                              duration-300

                              group-hover:text-cyan-400
                            "
                          >
                            {item.number}
                          </span>


                          {/* Main label */}

                          <div className="flex-1">

                            <p
                              className="
                                text-[19px]
                                font-medium
                                tracking-wide
                                text-gray-300

                                transition-all
                                duration-300

                                group-hover:translate-x-1
                                group-hover:text-white
                              "
                            >
                              {item.label}
                            </p>

                          </div>


                          {/* Arrow */}

                          <ArrowUpRight
                            size={19}
                            strokeWidth={1.5}

                            className="
                              text-gray-700

                              transition-all
                              duration-300

                              group-hover:-translate-y-1
                              group-hover:translate-x-1
                              group-hover:text-cyan-400
                            "
                          />

                        </Link>

                      </motion.div>

                    ))}

                  </div>


                  {/* =================================================
                      BOTTOM SECTION
                  ================================================= */}

                  <div
                    className="
                      mt-6
                      border-t
                      border-white/[0.06]
                      px-3
                      pt-5
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <span
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.3em]
                          text-gray-700
                        "
                      >
                        Explore
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-mono
                          text-gray-700
                        "
                      >
                        03 / 03
                      </span>

                    </div>

                  </div>

                </motion.div>

              )}

            </AnimatePresence>

          </div>

        </div>

      </header>


      {/* =================================================
          BACKGROUND ORBIT EFFECT
      ================================================= */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              pointer-events-none
              fixed
              right-[42px]
              top-[45px]
              z-[90]

              hidden
              h-32
              w-32

              rounded-full
              border
              border-cyan-400/10

              md:block
            "
          >

            <motion.div
              animate={{
                rotate: 360,
              }}

              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}

              className="
                absolute
                inset-[-15px]
                rounded-full
                border
                border-dashed
                border-white/[0.05]
              "
            />

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}



