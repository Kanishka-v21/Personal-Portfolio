"use client";

export default function CodeBackground() {
  return (
    <pre
      className="
      absolute
      left-10
      top-10
      text-cyan-400/5
      text-lg
      leading-8
      font-mono
      select-none
      pointer-events-none
    "
    >
{`const developer = {
  name: "Kanishka",
  passion: "Building",
  stack: ["React","Next","AI"],
};

export default developer;
`}
    </pre>
  );
}