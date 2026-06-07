import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoaderProps {
  onComplete: () => void;
}

export function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 1600; // 1.6s of precise premium transition duration

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const calculated = Math.min(Math.floor((elapsed / duration) * 100), 100);

      setProgress(calculated);

      if (calculated >= 100) {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600); // Allow exit animations to finish
        }, 200);
      } else {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-[#050505] p-8 md:p-16 noise-overlay"
        >
          {/* Top Decorative Lines */}
          <div className="w-full flex justify-between text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">
            <span>PORTFOLIO INTRO SYSTEM</span>
            <span> Bhopal, Madhya Pradesh / 2026 </span>
          </div>

          {/* Central Cinematic Typography and Neon Glow Grid */}
          <div className="relative flex flex-col items-center select-none text-center">
            {/* Soft Purple/Cyan Glowing Blobs Behind Text */}
            <div className="absolute -inset-10 -z-10 bg-gradient-to-r from-purple/15 to-cyan/15 blur-3xl opacity-60 rounded-full" />

            <motion.h3
              initial={{ letterSpacing: "0.4em", opacity: 0, filter: "blur(10px)" }}
              animate={{ letterSpacing: "0.2em", opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-xs uppercase tracking-[0.25em] text-cyan/90 font-mono mb-2"
            >
              LOADING CREATIVE ARCHITECTURE
            </motion.h3>

            <div className="overflow-hidden py-2">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="font-sora text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent"
              >
                JAYPRAKASH
              </motion.h1>
            </div>
            
            <div className="overflow-hidden py-1">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="text-sm font-poppins text-white/60 tracking-wider flex items-center gap-2"
              >
                <span>FRONTEND ENGINEER</span>
                <span className="w-2 h-2 rounded-full bg-cyan inline-block animate-pulse" />
                <span>UI & UX OPTIMIZATION</span>
              </motion.div>
            </div>
          </div>

          {/* Bottom Counters and Loading Progress Bars */}
          <div className="w-full max-w-xl flex flex-col gap-4 text-left">
            <div className="flex justify-between items-end font-mono">
              <div className="text-xs text-white/40 uppercase tracking-widest">
                System Boot
              </div>
              <div className="text-4xl md:text-6xl font-normal font-sora tracking-tighter text-white">
                {progress.toString().padStart(3, "0")}
                <span className="text-sm text-cyan ml-1">%</span>
              </div>
            </div>

            {/* Seamless glow tracking line */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple via-cyan to-blue"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between text-[9px] uppercase tracking-wider text-white/20 font-mono">
              <span>B.Tech Computer Science Portfolio v2.0</span>
              <span>Smooth Lerped Cursor Active</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
