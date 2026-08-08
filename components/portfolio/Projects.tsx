"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Queue Management System",
    description:
      "A smart queue management platform designed to reduce waiting time and improve the experience for both customers and service providers.",
    image: "/Queue.png",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Kanishka-v21/Virtual-Queue-Management",
  },
  {
    id: "02",
    title: "AI Codebase Intelligence",
    description:
      "An intelligent developer tool that understands large codebases using RAG and provides contextual insights.",
    image: "/projects/ai-codebase.jpg",
    tech: ["Next.js", "Python", "RAG", "AI"],
    link: "https://github.com/",
  },
  {
    id: "03",
    title: "Project Three",
    description:
      "A full-stack application built to solve a real-world problem through a clean and intuitive interface.",
    image: "/projects/project-3.jpg",
    tech: ["React", "Express", "MongoDB"],
    link: "https://github.com/",
  },
  {
    id: "04",
    title: "Project Four",
    description:
      "An experimental project exploring modern web technologies, interaction and visual design.",
    image: "/projects/project-4.jpg",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    link: "https://github.com/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-[120vh] translate-y-10 translate-x-25 overflow-hidden px-6 py-32 md:px-12 lg:px-20"
    >

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[160px]" />

      <div className="pointer-events-none absolute -right-40 top-40 h-[400px] w-[400px] rounded-full border border-cyan-400/[0.04]" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-[350px] w-[350px] rounded-full border border-white/[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}

        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan-400">
              04 / Selected Work
            </p>

            <h2 className="text-2xl font-bold tracking-tight md:text-7xl lg:text-6xl">
              THINGS
              <span className="text-outline">I BUILT.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-500">
            A collection of projects, experiments and ideas transformed into
            working software.
          </p>

        </div>


        {/* PROJECT GRID */}

        <div className="translate-y-10 grid grid-cols-1 gap-7 md:grid-cols-2">

          {projects.map((project, index) => (

            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                margin: "-80px",
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}

              whileHover={{
                y: -8,
              }}

              className="
                group
                relative
                h-[320px] w-[400px]
                overflow-hidden
                rounded-[2rem]
                border
                border-white/[0.08]
                bg-white/[0.025]
                transition-all
                duration-500
                hover:border-cyan-400/30
                hover:bg-white/[0.04]
              "
            >

              {/* IMAGE */}

              <div className="absolute inset-0 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    ease-out
                    group-hover:scale-110
                  "
                />

                {/* Dark gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />

                {/* Grid */}

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-20

                    [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
                    [background-size:45px_45px]
                  "
                />

              </div>


              {/* PROJECT NUMBER */}

              <div className="absolute left-6 top-6">

                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-2
                    text-[10px]
                    tracking-[0.25em]
                    text-gray-300
                    backdrop-blur-xl
                  "
                >
                  PROJECT {project.id}
                </span>

              </div>


              {/* ARROW */}

              <motion.div
                className="
                  absolute
                  right-6
                  top-6
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/30
                  text-white
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  group-hover:border-cyan-400
                  group-hover:bg-cyan-400
                  group-hover:text-black
                "
              >
                <ArrowUpRight
                  size={19}
                  className="
                    transition-transform
                    duration-500
                    group-hover:rotate-45
                  "
                />
              </motion.div>


              {/* CONTENT */}

              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-8">

                <h3 className="text-xl font-semibold tracking-tight md:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-300">
                  {project.description}
                </p>


                {/* TECH STACK */}

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-3
                        py-1.5
                        text-[11px]
                        text-gray-300
                        backdrop-blur-md
                        transition-colors
                        duration-300
                        group-hover:border-cyan-400/20
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* VIEW PROJECT */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-2
                    text-[10px]
                    uppercase
                    tracking-[0.3em]
                    text-gray-500
                    transition
                    duration-300
                    group-hover:text-cyan-400
                  "
                >

                  <ArrowUpRight
                    size={13}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-1
                      group-hover:translate-x-1
                    "
                  />
                </div>

              </div>

            </motion.a>

          ))}

        </div>

      </div>
    </section>
  );
}

