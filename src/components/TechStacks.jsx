import React from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
} from "react-icons/di";
import { SiNextdotjs, SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const techLinks = [
  {
    icon: <DiHtml5 />,
    name: "HTML5",
    href: "https://developer.mozilla.org/docs/Web/HTML",
  },
  {
    icon: <DiCss3 />,
    name: "CSS3",
    href: "https://developer.mozilla.org/docs/Web/CSS",
  },
  {
    icon: <DiJavascript />,
    name: "JavaScript",
    href: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  { icon: <DiReact />, name: "React", href: "https://react.dev/learn" },
  { icon: <SiNextdotjs />, name: "Next.js", href: "https://nextjs.org/" },
  { icon: <DiNodejs />, name: "Node.js", href: "https://nodejs.org/" },
  { icon: <SiExpress />, name: "Express.js", href: "https://expressjs.com/" },
  { icon: <DiMongodb />, name: "MongoDB", href: "https://mongodb.com/" },
  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    icon: <DiJava />,
    name: "Java",
    href: "https://dev.java/learn/getting-started/",
  },
];

const TechStacks = () => (
  <div className="px-4 sm:px-8 md:px-12 py-8 flex flex-col items-center">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-6 hidden md:block">
      Tech Stacks
    </h2>
    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-6">
      {techLinks.map((tech, i) => (
        <li
          key={i}
          className="flex flex-col items-center text-center text-zinc-400 hover:text-white transition"
        >
          <a href={tech.href} target="_blank" rel="noopener noreferrer">
            <span className="text-4xl sm:text-5xl mb-1">{tech.icon}</span>
            <span className="text-sm sm:text-base">{tech.name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default TechStacks;
