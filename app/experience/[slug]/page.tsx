"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const experienceData = {
  internship: {
    number: "01",
    year: "2026",
    type: "Internship",
    title: "Internship",
    organization: "Company Name",
    description:
      "A detailed look at my internship experience, responsibilities, projects, technologies and what I learned.",
    document: "Offer Letter",
    documentLink: "https://drive.google.com/",
  },

  hackathon: {
    number: "02",
    year: "2026",
    type: "Hackathon",
    title: "Hackathon",
    organization: "Hackathon Name",
    description:
      "A detailed look at the problem, solution, technology and my contribution to the project.",
    document: "Project Presentation",
    documentLink: "https://drive.google.com/",
  },

  achievement: {
    number: "03",
    year: "2025",
    type: "Achievement",
    title: "Achievement",
    organization: "Organization Name",
    description:
      "A detailed overview of the achievement and the work behind it.",
    document: "Certificate",
    documentLink: "https://drive.google.com/",
  },

  experience: {
    number: "04",
    year: "2025",
    type: "Experience",
    title: "Experience",
    organization: "Organization Name",
    description:
      "A detailed overview of this experience and the work completed.",
    document: "Experience Proof",
    documentLink: "https://drive.google.com/",
  },
};

export default function ExperienceDetail() {
  const router = useRouter();
  const params = useParams();

  const slug = params.slug as keyof typeof experienceData;
  const experience = experienceData[slug];

  if (!experience) {
    return (
      <main className="min-h-screen bg-[#f5f1e8] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-semibold">
            Experience not found
          </h1>

          <button
            onClick={() => router.back()}
            className="mt-8 flex items-center gap-2 text-sm"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 py-16 text-[#17222b]">

      {/* Atmospheric glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[130px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#c9b99c]/30 blur-[100px]" />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          [background-image:linear-gradient(rgba(23,34,43,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(23,34,43,.12)_1px,transparent_1px)]
          [background-size:60px_60px]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Back */}

        <button
          onClick={() => router.back()}
          className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#687984] transition hover:text-cyan-700"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />

          Back to Experience
        </button>

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >

          <p className="text-[10px] uppercase tracking-[0.4em] text-cyan-700">
            {experience.number} / {experience.type}
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
            {experience.title}
          </h1>

          <p className="mt-4 text-lg text-[#68747b]">
            {experience.organization}
          </p>

          <div className="mt-6 flex items-center gap-4">

            <span className="rounded-full border border-cyan-700/20 px-4 py-2 font-mono text-[10px] text-cyan-700">
              {experience.year}
            </span>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#899197]">
              Digital Archive
            </span>

          </div>

        </motion.div>

        {/* Main content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-20 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]"
        >

          {/* Story */}

          <div className="rounded-[4px] border border-[#17222b]/10 bg-[#eee9dd] p-8 md:p-12">

            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-700">
              Overview
            </p>

            <h2 className="mt-4 text-3xl font-semibold">
              The experience
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-8 text-[#68747b]">
              {experience.description}
            </p>

            <div className="mt-12">

              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-700">
                My Contribution
              </p>

              <p className="mt-4 text-sm leading-8 text-[#68747b]">
                Add the details of what you personally worked on here.
                Mention your responsibilities, technologies, challenges,
                decisions and the results you achieved.
              </p>

            </div>

          </div>

          {/* Information */}

          <div className="space-y-6">

            <div className="rounded-[4px] border border-[#17222b]/10 bg-[#eee9dd] p-8">

              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-700">
                Year
              </p>

              <p className="mt-3 font-mono text-2xl">
                {experience.year}
              </p>

            </div>

            <div className="rounded-[4px] border border-[#17222b]/10 bg-[#eee9dd] p-8">

              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-700">
                Organization
              </p>

              <p className="mt-3 text-xl font-semibold">
                {experience.organization}
              </p>

            </div>

          </div>

        </motion.div>

        {/* Document */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 rounded-[4px] bg-[#17222b] p-8 text-[#f5f1e8] md:p-10"
        >

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">

            <div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300">
                Documentation
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                {experience.document}
              </h2>

            </div>

            <a
              href={experience.documentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-[10px] uppercase tracking-[0.25em] text-cyan-200 transition hover:bg-cyan-300/20"
            >
              Open Document
              <ExternalLink size={13} />
            </a>

          </div>

        </motion.div>

        {/* Bottom */}

        <div className="mt-16 flex items-center justify-between border-t border-[#17222b]/10 pt-5">

          <span className="text-[10px] uppercase tracking-[0.3em] text-[#687984]">
            Archive Active
          </span>

          <span className="font-mono text-[10px] text-[#899197]">
            {experience.number} / 04
          </span>

        </div>

      </div>

    </main>
  );
}