import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Conclusion from "./components/Conclusion";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStacks from "./components/TechStacks";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const techStacksRef = useRef(null);

  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    [aboutRef, projectsRef, techStacksRef].forEach((r) => {
      if (r.current) observer.observe(r.current);
    });

    return () => {
      [aboutRef, projectsRef, techStacksRef].forEach((r) => {
        if (r.current) observer.unobserve(r.current);
      });
    };
  }, []);

  return (
    <div className="bg-[#0f1729] text-white w-screen md:h-screen min-h-screen md:grid md:grid-cols-12 flex flex-col md:overflow-hidden">
      <div className="md:col-span-5 h-auto md:h-screen p-6">
        <Header
          scrollTo={scrollTo}
          refs={{ aboutRef, projectsRef, techStacksRef }}
          active={activeSection}
        />
      </div>
      <div className="md:hidden sticky top-0">
        <header className="md:hidden sticky top-0 z-50 bg-[rgb(32,37,50,0.6)] shadow px-4 py-3 flex justify-evenly gap-4 overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => scrollTo(aboutRef)}
            className={`text-sm font-medium hover:text-white ${
              activeSection === "about" ? "text-white" : "text-zinc-400"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollTo(projectsRef)}
            className={`text-sm font-medium hover:text-white ${
              activeSection === "projects" ? "text-white" : "text-zinc-400"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo(techStacksRef)}
            className={`text-sm font-medium hover:text-white ${
              activeSection === "techstacks" ? "text-white" : "text-zinc-400"
            }`}
          >
            Tech Stacks
          </button>
        </header>
      </div>
      <div className="md:col-span-7 overflow-y-auto no-scrollbar p-6 flex flex-col gap-20 scroll-smooth">
        <section ref={aboutRef} id="about" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 block md:hidden">About</h2>
          <About />
        </section>

        <section ref={projectsRef} id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 block md:hidden">Projects</h2>
          <Projects />
        </section>

        <section ref={techStacksRef} id="techstacks" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4 block md:hidden">
            Tech Stacks
          </h2>
          <TechStacks />
        </section>

        <section className="scroll-mt-20">
          <Conclusion />
        </section>
      </div>
    </div>
  );
}

export default App;
