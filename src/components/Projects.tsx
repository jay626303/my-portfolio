import { useRef, useState, MouseEvent } from "react";
import { motion } from "motion/react";
import { Code, ExternalLink, Github, FolderClosed } from "lucide-react";
import { Project, portfolioData } from "../data/portfolioData";

interface TiltCardProps {
  project: Project;
}

function ProjectCard({ project }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to card coordinates [-0.5, 0.5]
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    // Max rotation 12deg
    setRotateX(-mouseY * 16);
    setRotateY(mouseX * 16);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        willChange: "transform",
      }}
      className="glass-card rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col justify-between aspect-[4/3] group hover:border-[#06B6D4]/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-300 relative overflow-hidden"
    >
      {/* Absolute futuristic wire grid decoration on card background */}
      <div className="absolute inset-x-0 bottom-0 top-[60%] bg-gradient-to-t from-cyan/5 via-transparent to-transparent pointer-events-none -z-10 group-hover:from-purple/5 transition-all" />

      {/* Header element */}
      <div className="flex justify-between items-start">
        <div className="p-3 bg-white/5 rounded-xl text-cyan group-hover:text-purple group-hover:bg-purple/10 transition-colors">
          <FolderClosed size={20} />
        </div>
        <span className="font-mono text-xs text-white/30 tracking-widest font-medium group-hover:text-cyan transition-colors">
          CODE // {project.date}
        </span>
      </div>

      {/* Title & Description paragraph */}
      <div className="my-6">
        <h3 className="font-sora font-extrabold text-xl sm:text-2xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-white/60 text-xs sm:text-sm mt-3 leading-relaxed font-sans font-light">
          {project.description}
        </p>
      </div>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded bg-white/5 border border-white/5 font-mono text-[9px] uppercase tracking-wider text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Dual action triggers: Live link + Code repo */}
      <div className="flex items-center gap-4 pt-4 border-t border-white/5">
        <a
          href={project.liveUrl}
          className="flex items-center gap-2 text-xs font-poppins tracking-wider uppercase font-semibold text-white/80 hover:text-cyan transition-colors"
        >
          <ExternalLink size={13} />
          <span>Live Demo</span>
        </a>
        <a
          href={project.githubUrl}
          className="flex items-center gap-2 text-xs font-poppins tracking-wider uppercase font-semibold text-white/40 hover:text-purple transition-colors ml-auto"
        >
          <Github size={13} />
          <span>GitHub Source</span>
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Background decoration lines */}
      <div className="absolute top-1/2 left-0 w-32 h-[1px] bg-gradient-to-r from-cyan/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header panel */}
        <div className="flex flex-col mb-16 relative">
          <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-2">
            <Code size={12} />
            <span>03 // PRODUCT SHELF</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Creative Digital Launches
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple to-cyan" />
        </div>

        {/* Dynamic Project Grid with multi-axis tilt effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
