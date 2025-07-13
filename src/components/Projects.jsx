import React from "react";
import netflixgpt from "../assets/netflix-gpt.png";
import thinkpad from "../assets/thinkpad.png";
import foodrecipe from "../assets/foodrecipe.png";
import devtinder from "../assets/devtinder.png";
import ProjectCard from "./ProjectCard";

const Projects = () => (
  <div className="px-4 sm:px-8 md:px-12">
    <h2 className="text-xl md:text-2xl font-bold text-white mb-4 hidden md:block">
      Projects
    </h2>
    <div className="flex flex-col gap-6">
      <ProjectCard
        imgSrc={netflixgpt}
        title="Netflix GPT"
        liveLink="https://nextflixgpt.vercel.app/"
        repoLinks={[
          {
            href: "https://github.com/Ankita-K-K/nextflix-gpt.git",
            label: "GitHub",
          },
        ]}
        description="Netflix GPT is an AI-powered movie recommendation web app that
            replicates the Netflix experience. It generates personalized movie
            suggestions based on user input using GPT technology."
        techs={["React.js", "Tailwind CSS", "Firebase (Auth)", "Redux ToolKit"]}
      />
      <ProjectCard
        imgSrc={thinkpad}
        title="ThinkPad"
        liveLink="https://think-pad-seven.vercel.app/"
        repoLinks={[
          {
            href: "https://github.com/Ankita-K-K/ThinkPad.git",
            label: "GitHub",
          },
        ]}
        description="ThinkPad is a clean, distraction-free note-taking app that helps
            users capture ideas with ease. It features AI-powered support that
            assists users by answering queries about their notes and helps them
            complete related tasks intelligently."
        techs={["Next.js", "Tailwind CSS"]}
      />
      <ProjectCard
        imgSrc={foodrecipe}
        title="Food Recipe"
        liveLink="https://food-recipe-phi-black.vercel.app/"
        repoLinks={[
          {
            href: "https://github.com/Ankita-K-K/Food-Recipe.git",
            label: "GitHub",
          },
        ]}
        description="Food Recipe is a user-friendly app that lets users save their
            favorite recipes and input available ingredients to discover dishes
            they can make."
        techs={["React.js", "Tailwind CSS", "React Context"]}
      />
      <ProjectCard
        imgSrc={devtinder}
        title="Dev-Tinder"
        liveLink={null}
        repoLinks={[
          {
            href: "https://github.com/Ankita-K-K/DevTinder.git",
            label: "GitHub (Backend)",
          },
          {
            href: "https://github.com/Ankita-K-K/devTinder-web.git",
            label: "GitHub (Frontend)",
          },
        ]}
        description="DevTinder is a developer-focused matching app that connects users
            based on skills, interests, and project preferences. It allows
            developers to swipe through potential collaborators and discover
            ideal teammates or mentors for their next project."
        techs={["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"]}
      />
    </div>
    <p className="text-zinc-300 text-sm md:text-base mt-6">
      I’m continuously building and exploring new ideas. Check out more projects
      on{" "}
      <a
        href="https://github.com/Ankita-K-K"
        target="_blank"
        className="font-semibold underline hover:text-white"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      .
    </p>
  </div>
);

export default Projects;
