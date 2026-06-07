import { motion } from "motion/react";
import { Download, Mail, ArrowRight, Github, Linkedin, MousePointer } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { generateResumePDF } from "../utils/resumeGenerator";

export function Hero() {
  const words = ["Hi, I’m Jayprakash Ahirwar", "Frontend Developer & Creative Web Designer"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  const pulseGlow = {
    scale: [1, 1.05, 1],
    opacity: [0.12, 0.18, 0.12],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 sm:px-6 md:px-12"
    >
      {/* Background Animated Gradient Blobs */}
      <motion.div
        animate={pulseGlow}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-purple/15 blur-3xl -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.1, 0.16, 0.1],
          transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-cyan/15 blur-3xl -z-10"
      />

      {/* Futuristic Grid Sub-mesh Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Cinematic System Announcement Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/30 bg-[#06B6D4]/5 text-cyan tracking-[0.2em] uppercase text-[10px] sm:text-xs mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
          </span>
          ACTIVE ON/OFF AIR RESUME PORTAL
        </motion.div>

        {/* Master Heading Grid with Reveal Sequences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 text-center items-center"
        >
          {/* Large Title with unique radial color masking */}
          <motion.div variants={itemVariants} className="overflow-hidden">
            <h1 className="font-sora text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-white via-cyan to-purple bg-clip-text text-transparent">
              {portfolioData.personal.name}
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl mt-2">
            <h2 className="font-poppins text-lg sm:text-2xl md:text-3xl font-light text-zinc-300 leading-relaxed">
              Frontend Developer & Creative Web Designer
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-xl mt-4">
            <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans font-light">
              Designing premium digital solutions. B.Tech Computer Science student building clean interfaces, fully compliant responsive models, and highly functional animations with pristine visual discipline.
            </p>
          </motion.div>

          {/* Glowing CTA Block */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full px-4"
          >
            {/* View Projects Button */}
            <button
              onClick={() => handleScrollTo("projects")}
              className="w-full sm:w-auto relative group flex items-center justify-center gap-2 bg-gradient-to-r from-purple to-cyan text-white text-xs uppercase font-poppins tracking-widest font-semibold px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>

            {/* Resume Button */}
            <button
              onClick={generateResumePDF}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs uppercase font-poppins tracking-widest font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              <Download size={14} className="animate-bounce" />
              Download Resume
            </button>

            {/* Quick Contact Button */}
            <button
              onClick={() => handleScrollTo("contact")}
              className="w-full sm:w-auto text-white/70 hover:text-white hover:underline text-xs uppercase font-poppins tracking-widest font-semibold px-8 py-4 rounded-lg transition-all cursor-pointer"
            >
              Let's Talk
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Micro Status Sidebar Indicators */}
      <div className="absolute right-8 bottom-12 hidden xl:flex flex-col gap-3 text-right text-[10px] font-mono uppercase tracking-[0.2em] text-white/30 z-10">
        <div>LATENCY // TRIPLE-BUFFERED</div>
        <div>STATION // BHOPAL, IN</div>
      </div>

      {/* Floating interactive mouse indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
          transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        onClick={() => handleScrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-mono text-white/50">
          SCROLL INBOUND
        </span>
        <div className="w-[18px] h-[30px] rounded-full border border-white/30 relative flex justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-cyan inline-block animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
