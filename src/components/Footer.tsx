import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      {/* Visual background boundary */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 text-center md:text-left">
        {/* Left copyright notice */}
        <div className="flex flex-col gap-1">
          <span className="font-sora font-semibold text-sm text-white tracking-wide">
            © {new Date().getFullYear()} Jayprakash Ahirwar
          </span>
          <span className="text-[10px] font-mono uppercase tracking-widest text-white/35">
            Designed & Built with absolute pixel discipline
          </span>
        </div>

        {/* Central social anchor array */}
        <div className="flex items-center gap-6">
          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-[#101010]/55 hover:border-cyan/40 hover:text-cyan text-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Github size={16} />
          </a>
          <a
            href={portfolioData.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full border border-white/10 bg-[#101010]/55 hover:border-blue/40 hover:text-blue text-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={`mailto:${portfolioData.personal.email}`}
            className="w-10 h-10 rounded-full border border-white/10 bg-[#101010]/55 hover:border-purple/40 hover:text-purple text-white/60 flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Mail size={16} />
          </a>
        </div>

        {/* Right back-to-top micro anchor */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono font-medium text-white/40 hover:text-cyan uppercase tracking-widest transition-colors cursor-pointer group"
        >
          <span>Back To Top</span>
          <div className="p-1.5 rounded bg-white/5 border border-white/5 text-white/40 group-hover:bg-[#8B5CF6]/15 group-hover:text-cyan transition-colors">
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>
      </div>
    </footer>
  );
}
