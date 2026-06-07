import { motion } from "motion/react";
import { User, BookOpen, Sparkles, Terminal, Shield, Award } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function About() {
  const stats = [
    { value: "01", label: "Specialty", desc: "Frontend & Responsive Architecture" },
    { value: "2+", font: "Sora", label: "Months Active Interning", desc: "Code Alpha Frontend Role" },
    { value: "05+", label: "Key Domains", desc: "React, Next, Python, C++, Web Concepts" },
    { value: "100%", label: "Responsive Accuracy", desc: "UI / Cross-browser Optimized" },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Background soft purple glow behind card to draw visual weight */}
      <div className="absolute right-1/4 top-1/2 w-[450px] h-[450px] bg-purple/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Title Grid */}
        <div className="flex flex-col mb-16 relative">
          <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-2">
            <User size={12} />
            <span>01 // PERSONA BRIEF</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Understanding My Mindset
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple to-cyan" />
        </div>

        {/* Content Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Premium Photo Frame / Graphic Module */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ rotate: -2, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[360px] aspect-square rounded-2xl p-[1px] bg-gradient-to-b from-purple/30 to-cyan/20 group cursor-pointer"
            >
              {/* Animated outer spinning rings */}
              <div className="absolute inset-x-0 top-0 -translate-y-4 flex justify-between px-6 z-10">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cyan/70 bg-[#050505]/95 border border-cyan/20 px-2 py-1 rounded">
                  B.Tech Student
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-purple/75 bg-[#050505]/95 border border-purple/30 px-2 py-1 rounded">
                  CS Core
                </span>
              </div>

              {/* Photo Frame Container with glowing overlay */}
              <div className="w-full h-full bg-[#0c0c0c] rounded-2xl overflow-hidden relative flex flex-col items-center justify-center p-8 border border-white/5 group-hover:border-cyan/30 transition-all duration-500">
                {/* Visual sci-fi scanner guide lines */}
                <span className="absolute top-2 left-2 text-[10px] text-white/20 font-mono">SYS-098</span>
                <span className="absolute bottom-2 right-2 text-[10px] text-white/20 font-mono">2026 // SYSTEM</span>

                 {/* Glowing Premium Portrait Avatar with cyber accessories */}
                <div className="relative w-64 h-64 rounded-full flex items-center justify-center group-hover:scale-105 transition-all duration-700">
                  <div className="absolute inset-0 border border-dotted border-cyan/40 rounded-full animate-spin [animation-duration:25s]" />
                  <div className="absolute -inset-2 border border-dashed border-purple/35 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]" />
                  
                  {/* Glowing Ring */}
                  <div className="absolute -inset-1 bg-gradient-to-tr from-purple via-cyan to-blue rounded-full opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-500" />
                  
                  {/* Portrait Image container */}
                  <div className="relative w-[240px] h-[240px] rounded-full overflow-hidden border border-white/20 bg-[#050505]">
                    <img
                      src="/src/assets/images/profile_photo_1780683816639.png"
                      alt="Jayprakash Ahirwar Portrait"
                      referrerPolicy="no-referrer"
                      className="object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 block"
                      style={{
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        marginLeft: "0px",
                        width: "262.667px",
                        height: "237.667px",
                      }}
                    />
                    
                    {/* Subtle digital scanning lines overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan/20 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan/55 shadow-[0_0_8px_#06B6D4] animate-[bounce_3s_infinite]" />
                  </div>
                </div>

                <div className="text-center mt-6">
                  <h4 className="font-sora font-semibold text-white tracking-tight">Jayprakash Ahirwar</h4>
                  <p className="text-xs text-white/40 mt-1 font-mono uppercase tracking-widest">
                    Bhopal, Madhya Pradesh
                  </p>
                </div>

                {/* Glowing bottom tag */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Bio Paragraph & Core Values */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white/80 font-sans leading-relaxed text-sm sm:text-base flex flex-col gap-4"
            >
              <p>
                As a student of <strong className="text-white">B.Tech Computer Science</strong>, I possess an insatiable curiosity for solving architectural frontend problems. My approach leverages responsive grids, performance-centric states, and aesthetic visuals to translate creative ideas into award-winning interfaces.
              </p>
              <p>
                I am highly devoted to pixel perfection. During my internship, I developed fully fluid, responsive UI matrices, resolved browser consistency anomalies, and polished user journeys with visual assets.
              </p>
            </motion.div>

            {/* Premium values grids */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="glass-card p-5 rounded-xl border border-white/5 flex gap-4">
                <div className="p-3 bg-purple/10 rounded-lg text-purple max-h-12 flex items-center">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-sm text-white">Full Stack Ready</h4>
                  <p className="text-xs text-white/55 mt-1 font-sans">
                    Fusing programming rigor with design artistry to ensure robust, maintainable code structures.
                  </p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-xl border border-white/5 flex gap-4">
                <div className="p-3 bg-cyan/10 rounded-lg text-cyan max-h-12 flex items-center">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h4 className="font-sora font-semibold text-sm text-white">UX Focus Mode</h4>
                  <p className="text-xs text-white/55 mt-1 font-sans">
                    Ensuring highly interactive micro-moments look elegant without overloading visual budgets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group cursor-pointer hover:border-cyan/20 transitions-all duration-300"
            >
              {/* Side thin border pointer */}
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-purple to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="font-sora text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan to-blue tracking-tight">
                {stat.value}
              </h3>
              <div className="font-poppins font-medium text-xs text-white uppercase tracking-wider mt-4">
                {stat.label}
              </div>
              <div className="text-xs text-white/40 mt-1 font-sans">
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
