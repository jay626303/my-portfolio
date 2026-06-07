import { motion } from "motion/react";
import { Briefcase, Calendar, Star, KanbanSquare } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Absolute ambient light blobs */}
      <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] bg-[#06B6D4]/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="flex flex-col mb-16 relative">
          <div className="flex items-center gap-2 text-purple font-mono text-xs uppercase tracking-[0.3em] mb-2">
            <Briefcase size={12} />
            <span>04 // TIMELINE & ROLES</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan to-purple" />
        </div>

        {/* Timeline representation */}
        <div className="relative max-w-4xl mx-auto pl-8 sm:pl-16">
          {/* Vertical Glowing Line */}
          <div className="absolute left-[11px] sm:left-[23px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-purple via-cyan to-transparent shadow-[0_0_10px_rgba(6,182,212,0.4)]" />

          {/* Timeline Node entry */}
          {portfolioData.experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-12">
              {/* Glowing circular timestamp beacon */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#050505] border-2 border-cyan shadow-[0_0_15px_rgba(6,182,212,0.6)] flex items-center justify-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan inline-block animate-ping" />
              </div>

              {/* Stagger reveal container panel */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 relative group hover:border-purple/30 transition-all duration-300"
              >
                {/* Meta header block */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-white/5">
                  <div>
                    <h3 className="font-sora font-extrabold text-lg sm:text-2xl text-white group-hover:text-cyan transition-colors">
                      {exp.role}
                    </h3>
                    <div className="font-poppins font-medium text-xs sm:text-sm text-purple tracking-widest uppercase mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/5 text-white/50 text-[11px] sm:text-xs font-mono max-h-8">
                    <Calendar size={12} className="text-cyan text-[11px]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet details list */}
                <div className="flex flex-col gap-3 font-sans text-white/70 text-xs sm:text-sm leading-relaxed font-light">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <div key={respIdx} className="flex gap-3">
                      <span className="text-cyan mt-1 text-xs">•</span>
                      <p>{resp}</p>
                    </div>
                  ))}
                </div>

                {/* Highlight tag indicators */}
                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-purple bg-purple/10 border border-purple/15 px-2 py-0.5 rounded">
                    Responsive Design
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-cyan bg-cyan/10 border border-cyan/15 px-2 py-0.5 rounded">
                    Cross-Browser Support
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-white/60 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                    Canva UI Tools
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
