import { useState } from "react";
import { motion } from "motion/react";
import { Hammer, Sparkles, Monitor, ToggleLeft, Layers } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  // Map category names to lucide icons
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend Dev":
        return <Layers size={16} className="text-cyan" />;
      case "Programming Core":
        return <Monitor size={16} className="text-purple" />;
      case "Web Engineering":
        return <Sparkles size={16} className="text-blue" />;
      case "Tools & Deployments":
        return <Hammer size={16} className="text-white" />;
      default:
        return <ToggleLeft size={16} className="text-cyan" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Absolute floating cyber dust background */}
      <div className="absolute left-1/2 bottom-0 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-cyan/25 to-transparent -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Title Block */}
        <div className="flex flex-col mb-16 relative">
          <div className="flex items-center gap-2 text-purple font-mono text-xs uppercase tracking-[0.3em] mb-2">
            <Hammer size={12} />
            <span>02 // CAPABILITIES MATRIX</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Mastered Tech Stack & Skills
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan to-purple" />
        </div>

        {/* Categories Tab Selector for responsive displays */}
        <div className="flex flex-wrap gap-2 mb-10 w-full justify-start items-center p-1 border-b border-white/5 pb-4">
          {portfolioData.skills.map((group, idx) => (
            <button
              key={group.category}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-xs uppercase font-poppins tracking-wider rounded-lg transition-all duration-300 flex items-center gap-2 hover:bg-white/5 cursor-pointer ${
                activeTab === idx
                  ? "bg-white/10 text-white font-semibold border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  : "text-white/40 hover:text-white"
              }`}
            >
              {getCategoryIcon(group.category)}
              <span>{group.category}</span>
            </button>
          ))}
        </div>

        {/* Skills List Animated Grid with proficiency progress bar triggers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.skills[activeTab].skills.map((skill, skillIdx) => (
            <motion.div
              key={skill.name}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: skillIdx * 0.08 }}
              className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-cyan/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.12)] transition-all duration-500 cursor-pointer"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan/5 to-transparent -z-10 group-hover:from-purple/5 transition-all" />

              {/* Skill Core Name & Stat Circle */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col gap-1">
                  <span className="font-sora font-semibold text-lg text-white group-hover:text-cyan transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-[10px] text-white/35 font-mono uppercase tracking-widest">
                    Level Indicator // System Verified
                  </span>
                </div>
                <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center font-mono text-xs text-white bg-[#0a0a0a] group-hover:border-cyan/55 transition-colors">
                  {skill.proficiency}%
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden relative">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple via-blue to-cyan"
                />
              </div>

              {/* Small details footer */}
              <div className="flex justify-between items-center text-[9px] font-mono text-white/20 mt-4 uppercase">
                <span>Optimized latency status</span>
                <span>Active</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Overview Box to ensure non-active tabs have visual presence */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 p-8 rounded-2xl glass-card border border-white/5 relative">
          <div className="absolute inset-x-0 bottom-0 h-[12px] rounded-b-2xl bg-gradient-to-r from-purple/10 via-cyan/10 to-blue/10" />
          <div className="flex flex-col gap-2">
            <h4 className="font-sora font-bold text-lg text-white">Full Stack Student Alignment</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Synthesizing rigorous academic insights with modern frontend packages (React/Next), UI workflows, and pixel-accurate tools. Ready to contribute outstanding user experience levels to production workspaces.
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills.map((group, index) => (
                <div
                  key={index}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] uppercase tracking-wider text-white/60"
                >
                  {group.category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
