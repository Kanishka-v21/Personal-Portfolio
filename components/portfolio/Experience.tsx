"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileText,
  Presentation,
  Award,
  BriefcaseBusiness,
  ExternalLink,
} from "lucide-react";

const experiences = [
  {
    id: "01",
    year: "2026",
    title: "Internship",
    organization: "Company Name",
    type: "Offer Letter",
    icon: BriefcaseBusiness,
    document: "Offer Letter",
    description: "Internship / Developer Experience",
    link: "/experience/internship",
    rotation: -3,
  },

  {
    id: "02",
    year: "2026",
    title: "Hackathon",
    organization: "Hackathon Name",
    type: "Presentation",
    icon: Presentation,
    document: "Project PPT",
    description: "Final project presentation",
    link: "/experience/hackathon",
    rotation: 2,
  },

  {
    id: "03",
    year: "2025",
    title: "Achievement",
    organization: "Organization Name",
    type: "Certificate",
    icon: Award,
    document: "Certificate",
    description: "Certificate of achievement",
    link: "/experience/achievement",
    rotation: -2,
  },

  {
    id: "04",
    year: "2025",
    title: "Experience",
    organization: "Organization Name",
    type: "Document",
    icon: FileText,
    document: "Experience Proof",
    description: "Supporting document",
    link: "/experience/experience",
    rotation: 3,
  },
];
export default function Experience() {
  const router = useRouter();
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden bg-[#e8e3d8] px-6 py-28 text-[#17222b] md:px-12 lg:px-20">
              <div className="pointer-events-none absolute inset-0">

        {/* Blue atmospheric glow */}

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[130px]" />

        {/* Warm glow */}

        <div className="absolute right-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#c9b99c]/30 blur-[100px]" />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.12]

            [background-image:linear-gradient(rgba(23,34,43,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(23,34,43,.12)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        />

      </div>

      <div className="relative translate-y-40 translate-x-50 z-10 mx-auto max-w-6xl">

        <div className="flex items-end justify-between">

          <div>

            <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-cyan-700">
              05 / Experience
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              My journey,
              <span className="ml-2 font-serif italic text-[#687984]">
                documented.
              </span>
            </h2>

          </div>

          <div className="hidden text-right md:block">

            <p className="text-[10px] uppercase tracking-[0.3em] text-[#7c858a]">
              Digital Archive
            </p>

            <p className="mt-1 font-mono text-xs text-[#687984]">
              {String(experiences.length).padStart(2, "0")} DOCUMENTS
            </p>

          </div>

        </div>


        {/* ================================================= */}
        {/* ARCHIVE */}
        {/* ================================================= */}

        <div className="relative mt-20">

          {/* Horizontal line */}

          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-[#17222b]/10 lg:block" />


          {/* Documents */}

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

            {experiences.map((experience, index) => (

              <Document
                key={experience.id}
                experience={experience}
                index={index}
              />

            ))}

          </div>

        </div>


        {/* ================================================= */}
        {/* BOTTOM ARCHIVE BAR */}
        {/* ================================================= */}

        <div className="mt-20 flex items-center justify-between border-t border-[#17222b]/10 pt-5">

          <div className="flex items-center gap-3">

            <span className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,.7)]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#687984]">
              Archive Active
            </span>

          </div>

          <p className="font-mono text-[10px] text-[#899197]">
            2025 — 2026
          </p>

        </div>

      </div>

    </section>
  );
}

function Document({ experience, index }) {
const Icon = experience.icon;
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(experience.link)}

      initial={{
        opacity: 0,
        y: 50,
        rotate: experience.rotation,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        rotate: experience.rotation,
      }}

      viewport={{
        once: true,
        margin: "-80px",
      }}

      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}

      whileHover={{
        y: -15,
        rotate: 0,
        scale: 1.03,
      }}

      className="group relative block cursor-pointer"
    >

      {/* ================================================= */}
      {/* DOCUMENT PAPER */}
      {/* ================================================= */}

      <div
        className="
          relative
          h-[300px]
          overflow-hidden
          rounded-[4px]
          border
          border-[#17222b]/10
          bg-[#f5f1e8]
          p-5
          shadow-[0_20px_35px_rgba(23,34,43,.12)]
          transition-shadow
          duration-500
          group-hover:shadow-[0_30px_60px_rgba(23,34,43,.2)]
        "
      >

        {/* Paper texture */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-30

            [background-image:radial-gradient(rgba(23,34,43,.12)_0.5px,transparent_0.5px)]
            [background-size:7px_7px]
          "
        />


        {/* Top document bar */}

        <div className="relative flex items-center justify-between">

          <span className="font-mono text-[9px] tracking-widest text-[#7d878c]">
            DOC_{experience.id}
          </span>

          <Icon
            size={16}
            strokeWidth={1.5}
            className="text-cyan-700"
          />

        </div>


        {/* Fake document lines */}

        <div className="relative mt-7">

          <div className="h-[2px] w-16 bg-[#17222b]/20" />

          <div className="mt-4 h-[1px] w-full bg-[#17222b]/10" />

          <div className="mt-2 h-[1px] w-[80%] bg-[#17222b]/10" />

          <div className="mt-2 h-[1px] w-[60%] bg-[#17222b]/10" />

        </div>


        {/* Main information */}

        <div className="absolute bottom-5 left-5 right-5">

          <p className="text-[9px] uppercase tracking-[0.25em] text-cyan-700">
            {experience.type}
          </p>

          <h3 className="mt-2 text-xl font-semibold tracking-tight">
            {experience.title}
          </h3>

          <p className="mt-1 text-xs text-[#68747b]">
            {experience.organization}
          </p>

          <p className="mt-4 text-[10px] leading-5 text-[#899197]">
            {experience.description}
          </p>

        </div>


        {/* Year stamp */}

        <div
          className="
            absolute
            right-4
            top-20
            rotate-[-8deg]
            rounded-full
            border
            border-cyan-700/20
            px-3
            py-1
            font-mono
            text-[9px]
            text-cyan-700/70
          "
        >
          {experience.year}
        </div>


        {/* Hover overlay */}

        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            bg-[#17222b]/80
            opacity-0
            backdrop-blur-[2px]
            transition
            duration-500
            group-hover:opacity-100
          "
        >

          <div className="flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-cyan-200">

            Open Document

            <ExternalLink size={13} />

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* DOCUMENT LABEL */}
      {/* ================================================= */}

      <div className="mt-4 flex items-center justify-between px-1">

        <div>

          <p className="text-[10px] uppercase tracking-[0.25em] text-[#68747b]">
            {experience.year}
          </p>

        </div>

        <ArrowUpRight
          size={14}
          className="text-[#7b878d] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-600"
        />

      </div>

    </motion.div>
  );
}

