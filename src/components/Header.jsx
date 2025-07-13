import React from "react";
import { BsEnvelope, BsGithub, BsLinkedin } from "react-icons/bs";

const Header = ({ scrollTo, refs, active }) => {
  return (
    <div className="flex flex-col gap-8 pt-10 md:pt-20 w-full">
      <div className="text-center md:text-left px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-zinc-200 font-semibold">
          Ankita K. Kanakagiri
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl text-zinc-300 font-semibold mt-2">
          Full Stack Developer
        </h2>
        <p className="text-base lg:text-xl text-zinc-400 mt-4 lg:text-justify">
          Aspiring Full-Stack developer. Passionate about building responsive,
          user‑friendly applications and continuously learning new tech.
        </p>
      </div>

      <div className="hidden md:flex flex-col gap-6 px-4">
        {[
          { id: "about", label: "ABOUT", ref: refs.aboutRef },
          { id: "projects", label: "PROJECTS", ref: refs.projectsRef },
          { id: "techstacks", label: "TECHSTACKS", ref: refs.techStacksRef },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.ref)}
            className="flex items-center gap-4 group cursor-pointer w-full"
          >
            <div
              className={`w-8 h-0.5 origin-left rounded-sm transition-all duration-300 ${
                active === item.id
                  ? "bg-zinc-200 scale-x-[2.5]"
                  : "bg-zinc-500 group-hover:bg-zinc-200 group-hover:scale-x-[2.5]"
              }`}
            />
            <div
              className={`font-semibold transition-all duration-300 ${
                active === item.id
                  ? "text-zinc-200 translate-x-11"
                  : "text-zinc-500 group-hover:text-zinc-200 group-hover:translate-x-11"
              }`}
            >
              {item.label}
            </div>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-6 justify-center md:justify-start px-4 mt-6">
        <a
          href="https://github.com/Ankita-K-K/"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="h-6 w-6 opacity-75" />
        </a>
        <a
          href="https://www.linkedin.com/in/ankita-kanakagiri-8935b1264/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="h-6 w-6 opacity-75" />
        </a>
        <a
          href="mailto:ankitakanakagiri@gmail.com"
          className="flex items-center gap-2"
        >
          <BsEnvelope className="h-6 w-6 opacity-75" />
          <p className="text-xs text-zinc-400 hover:text-zinc-200 hidden sm:block">
            ankitakanakagiri@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
};

export default Header;
