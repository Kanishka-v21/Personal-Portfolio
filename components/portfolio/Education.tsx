"use client";

import { motion } from "framer-motion";

const education = [
  {
    year: "2026 — 2030",
    degree: "B.S, Data Science",
    institution: "Indian Institute of Technology",
    location: "Madras, India",
    result: "8.05 CGPA",
    logo: "\image.png",

    subject: [
      "Data Science",
      "Machine Learning",
      "Statistics",
    ],

    extracurriculars: [
      "Hackathons",
      "Technical Communities",
      "Open Source",
    ],

    achievements: [
      "Subject Topper",
      "First Division in 1st Year",
    ],
  },

  {
    year: "2025 — 2029",
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Maharaja Surajmal Institute of Technology",
    location: "Delhi, India",
    result: "9.5 CGPA",
    logo: "/logo.png",

    subject: [
      "Data Structures and Algorithms",
      "Software Development",
      "Database Management",
      "Computer Networks",
    ],

    extracurriculars: [
        "Hackathons",
        "Technical Communities",
        "Open Source",
    ],

    achievements: [
      "Reliance Foundation UG Scholar",
      "First Division in 1st Year",
    ],
  },

  {
    year: "2025",
    degree: "Secondary Education",
    institution: "Holy Child Sr. Sec. School",
    location: "Delhi, India",
    result: " 10th Grade: 95.2% \n 12th Grade: 92.4%",
    logo: "/schl.png",

    subject: [
      "Mathematics",
      "Chemistry",
      "Physics",
    ],

    extracurriculars: [
      "Olympiads",
      "Sports Competitions",
      "Student Volunteer Programs",
    ],

    achievements: [
      "Gold medalist in Silverzone International Olympiads, class 11th",
      "MUNs, Debates, and Public Speaking",
      "Community Service and Volunteering",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative min-h-[100vh] z-10 flex h-full w-full items-center justify-center overflow-hidden bg-[#e9e1d2] px-6 py-32 text-[#171717] md:px-16 lg:px-24"
    >
      <div className="translate-y-15 mx-auto max-w-7xl pt-16 md:pt-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-28 ml-4 md:ml-12 lg:ml-20"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#171717]/40" />

            <span className="font-mono text-xs tracking-[0.5em]">
              02 — EDUCATION
            </span>
          </div>

          <h2 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            Education
          </h2>
        </motion.div>

        {/* EDUCATION ITEMS */}
        <div className="space-y-32">

          {education.map((item, index) => {
            const reversed = index % 2 !== 0;

            return (
              <motion.article
                key={item.degree}
                initial={{
                  opacity: 0,
                  x: reversed ? 40 : -40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="mx-auto max-w-6xl"
              >

                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-24 ${
                    reversed ? "lg:[&>.education-info]:order-2" : ""
                  }`}
                >

                  {/* INFORMATION */}
                  <div
                    className={`education-info ${
                      reversed ? "lg:pl-12" : "lg:pr-12"
                    }`}
                  >

                    {/* YEAR */}
                    <p className="font-mono text-xs tracking-[0.2em] text-[#171717]/40">
                      {item.year}
                    </p>

                    {/* DEGREE */}
                    <h3 className="mt-5 text-3xl font-medium leading-tight tracking-tight md:text-5xl">
                      {item.degree}
                    </h3>

                    {/* INSTITUTION */}
                    <p className="mt-5 text-base font-medium text-[#171717]/75">
                      {item.institution}
                    </p>

                    <p className="mt-1 text-sm text-[#171717]/40">
                      {item.location}
                    </p>

                    {/* RESULT */}
                    <div className="mt-7 inline-flex border border-[#171717]/15 px-4 py-2">
                      <span className="font-mono text-xs tracking-[0.12em]">
                        {item.result}
                      </span>
                    </div>

                    {/* DIVIDER */}
                    <div className="mt-10 h-px w-full bg-[#171717]/15" />

                    {/* DETAILS */}
                    <div className="mt-8 grid gap-8 sm:grid-cols-3">

                      {/* EDUCATION */}
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-[#171717]/40">
                          EDUCATION
                        </p>

                        <ul className="mt-4 space-y-2">
                          {item.subject.map((entry) => (
                            <li
                              key={entry}
                              className="text-sm leading-relaxed text-[#171717]/65"
                            >
                              {entry}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* EXTRACURRICULARS */}
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-[#171717]/40">
                          EXTRACURRICULARS
                        </p>

                        <ul className="mt-4 space-y-2">
                          {item.extracurriculars.map((entry) => (
                            <li
                              key={entry}
                              className="text-sm leading-relaxed text-[#171717]/65"
                            >
                              {entry}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CERTIFICATIONS */}
                      <div>
                        <p className="font-mono text-[10px] tracking-[0.18em] text-[#171717]/40">
                          ACHIEVEMENTS
                        </p>

                        <ul className="mt-4 space-y-2">
                          {item.achievements.map((entry) => (
                            <li
                              key={entry}
                              className="text-sm leading-relaxed text-[#171717]/65"
                            >
                              {entry}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* LOGO */}
                  <div
                    className={`flex ${
                      reversed
                        ? "justify-start lg:justify-end"
                        : "justify-end lg:justify-start"
                    }`}
                  >
                    <div className="group relative flex h-32 w-32 items-center justify-center overflow-hidden p-12 transition-transform duration-500 hover:scale-[1.02] md:h-80 md:w-80">

                      <img
                        src={item.logo}
                        alt={`${item.institution} logo`}
                        className="h-36 object-contain transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Corner details */}
                      <div className="absolute left-5 top-5 h-7 w-7" />

                      <div className="absolute bottom-5 right-5 h-7 w-7" />

                    </div>
                  </div>

                </div>
              </motion.article>
            );
          })}

        </div>
      </div>
    </section>
  );
}

