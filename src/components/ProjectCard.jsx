import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  imgSrc,
  title,
  liveLink,
  repoLinks,
  description,
  techs,
}) => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 p-4 md:p-6 hover:bg-[rgba(52,53,61,0.35)] rounded transition">
    <div className="md:col-span-5 w-full">
      <img
        src={imgSrc}
        alt={title}
        className="h-[10rem] w-full object-cover rounded-2xl"
      />
    </div>
    <div className="md:col-span-7 flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl font-semibold text-blue-200 inline-flex items-center gap-1 hover:-translate-y-1 transition"
          >
            {title} <FiExternalLink />
          </a>
        ) : (
          <p className="text-lg md:text-xl font-semibold">{title}</p>
        )}
        {repoLinks.map((r, i) => (
          <a
            key={i}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white hover:-translate-x-0.5 transition"
          >
            {r.label}
          </a>
        ))}
      </div>
      <p className="text-zinc-300 md:text-xs lg:text-base text-base">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 lg:text-sm mt-2">
        {techs.map((tech, i) => (
          <span key={i} className="bg-[#383d46] rounded-full px-3 py-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;
