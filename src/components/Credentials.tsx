import { motion } from "motion/react";
import { Award, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Credentials() {
  return (
    <section
      id="credentials"
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      <div className="absolute top-10 left-1/3 w-[300px] h-[300px] bg-cyan/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Responsive Dual Column Split for Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Certifications */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-4">
              <Award size={12} />
              <span>05 // CREDENTIAL VERIFICATION</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
              Certifications
            </h2>

            <div className="flex flex-col gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -25, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-cyan/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all"
                >
                  {/* Glowing background halo */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan/5 to-transparent -z-10" />

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan/10 rounded-xl text-cyan group-hover:bg-cyan/20 transition-colors">
                      <ShieldCheck size={20} className="animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-sora font-bold text-lg text-white leading-snug group-hover:text-cyan transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-white/40 mt-1 font-mono uppercase tracking-widest">
                        Issued by: {cert.issuer}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-mono text-cyan uppercase tracking-widest bg-cyan/5 border border-cyan/20 px-2 py-0.5 rounded">
                        Authorized ID Verified
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Achievements */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-purple font-mono text-xs uppercase tracking-[0.3em] mb-4">
              <Trophy size={12} />
              <span>06 // SUCCESS SPECTRUM</span>
            </div>
            <h2 className="font-sora text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-8">
              Key Achievements
            </h2>

            <div className="flex flex-col gap-4">
              {portfolioData.achievements.map((ach, index) => (
                <motion.div
                  key={index}
                  initial={{ x: 25, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 rounded-2xl border border-white/5 relative group hover:border-purple/30 hover:shadow-[0_0_25px_rgba(139,92,246,0.08)] transition-all flex gap-4"
                >
                  <div className="p-2.5 bg-[#8B5CF6]/10 rounded-lg text-purple h-10 w-10 flex items-center justify-center">
                    <Sparkles size={16} />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed font-light">
                      {ach.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
