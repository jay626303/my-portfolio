import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Linkedin, Mail, Github, Compass } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Intro" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Timeline" },
    { id: "contact", label: "Contact" },
  ];

  // Track scroll position to update active nav highlight and trigger navbar background blur change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out py-4 px-4 sm:px-6 md:px-12 ${
          scrolled ? "backdrop-blur-md bg-[#050505]/40 border-b border-white/5" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo / Personal Initials with visual glow */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-9 h-9 rounded-full bg-gradient-to-tr from-purple via-blue to-cyan flex items-center justify-center p-[1px] transition-transform duration-500 group-hover:rotate-180">
              <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center font-sora font-extrabold text-[#06B6D4] text-xs">
                JA
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sora text-sm font-bold tracking-tight text-white group-hover:text-cyan transition-colors duration-300">
                Jayprakash
              </span>
              <span className="text-[10px] uppercase font-mono text-white/40 tracking-wider">
                Creative Portfolio
              </span>
            </div>
          </button>

          {/* Desktop Navigation Capsule */}
          <nav className="hidden md:flex items-center gap-1 bg-[#101010]/60 border border-white/15 px-2 py-1.5 rounded-full backdrop-blur-xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-1.5 text-xs font-poppins tracking-wider rounded-full transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-white font-semibold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-purple/35 via-cyan/25 to-blue/35 border border-cyan/40 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Social Icons (Desktop only) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="referrer"
              className="text-white/50 hover:text-cyan hover:scale-115 transition-all duration-300"
            >
              <Github size={17} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="referrer"
              className="text-white/50 hover:text-blue hover:scale-115 transition-all duration-300"
            >
              <Linkedin size={17} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className="text-white/50 hover:text-purple hover:scale-115 transition-all duration-300"
            >
              <Mail size={17} />
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full border border-white/10 bg-[#101010]/80 text-white hover:text-cyan cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-[72px] z-30 bg-[#050505]/95 backdrop-blur-2xl md:hidden flex flex-col p-6 border-t border-white/5"
          >
            <div className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full py-4 text-left border-b border-white/5 font-sora font-medium text-lg tracking-wide ${
                    activeSection === item.id
                      ? "text-cyan bg-cyan/5 px-2 rounded-lg"
                      : "text-white/75"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Compass size={18} className={activeSection === item.id ? "text-cyan" : "text-white/30"} />
                    <span>{item.label}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-auto flex justify-center gap-8 py-6 border-t border-white/5">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="referrer"
                className="p-3 bg-white/5 rounded-full text-white/70 hover:text-cyan"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="referrer"
                className="p-3 bg-white/5 rounded-full text-white/70 hover:text-blue"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="p-3 bg-white/5 rounded-full text-white/70 hover:text-purple"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
