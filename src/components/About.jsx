import React from "react";
import { FiExternalLink } from "react-icons/fi";

const About = () => (
  <div className="text-sm sm:text-base md:text-base md:text-justify lg:text-lg text-[#cac7c7] tracking-wide px-4 sm:px-8 md:px-12 md:pt-20">
    <p className="mb-4">
      I’m an enthusiastic full-stack web developer passionate about building
      clean, responsive, and user-friendly web applications. I work with the
      MERN stack—MongoDB, Express.js, React, and Node.js—and also know Next.js
      for creating fast and SEO-friendly web experiences.
    </p>
    <p className="mb-4">
      I enjoy turning ideas into real-world projects. From crafting sleek
      interfaces with Tailwind CSS and React/Next.js to developing scalable APIs
      with Express and MongoDB, I focus on writing clean, maintainable code.
      I’ve also gained experience through hackathons and team-based projects
      that strengthened my problem-solving and collaboration skills.
    </p>
    <p className="mb-4">
      Alongside web development, I actively practice data structures and
      algorithms (
      <a
        href="https://leetcode.com/u/Ankita_Kanakagiri/"
        target="_blank"
        className="font-semibold"
      >
        leetcode
      </a>
      ) using Java to strengthen my core problem-solving skills. I'm currently
      focused on building impactful projects and continuously improving my
      skills. I’m open to career opportunities where I can contribute, grow, and
      make a meaningful difference through my work.
    </p>
    <a
      href="https://drive.google.com/file/d/1A9L6hd7BhDEXVm168bUozHORnMgrRaMf/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg font-semibold text-blue-200 hover:-translate-y-1 transition"
    >
      View My Resume <FiExternalLink />
    </a>
  </div>
);

export default About;
