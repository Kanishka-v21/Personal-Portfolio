"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Software Engineer",
  "AI Builder",
  "Full Stack Developer",
  "Problem Solver",
  "Open Source Contributor",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentRole.substring(0, text.length + 1));

          if (text === currentRole) {
            setTimeout(() => setIsDeleting(true), 1200);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 90
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <div className="flex items-center gap-3">
      <span className="text-cyan-400 text-3xl">
        &gt;
      </span>

      <h2 className="text-2xl font-semibold text-white">

        {text}

        <motion.span
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
          }}
          className="ml-1"
        >
          |
        </motion.span>

      </h2>

    </div>
  );
}