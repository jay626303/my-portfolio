import { useState } from "react";
import { CustomCursor } from "./components/CustomCursor";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* 1. Preloader Screen Guard */}
      <Loader onComplete={() => setLoading(false)} />

      {/* 2. Main Site Contents (Fade in as Loading finishes) */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative font-sans text-white/90 bg-[#050505] min-h-screen Selection:bg-[#06B6D4]/35 selection:text-white noise-animate overflow-clip"
          >
            {/* Smooth Lerped Elastic Custom Cursor System and mouse follow spotlights */}
            <CustomCursor />

            {/* Sticky Floating Dock Navigation */}
            <Navbar />

            {/* Master Sections Content Matrix */}
            <main>
              {/* Home Landing Area with Typing Reveal Controls */}
              <Hero />

              {/* About Section - Academic Stats Counter Matrices */}
              <About />

              {/* Skills Area - Capabilites Progress Gird Tabulations */}
              <Skills />

              {/* Project Shelf - 3D Perspective Elastic Cards */}
              <Projects />

              {/* Chronological Intern Timelines */}
              <Experience />

              {/* Validated Credentials (Certifications & Key Achievements) */}
              <Credentials />

              {/* Contact Node Area of Coordinates and Form Submits */}
              <Contact />
            </main>

            {/* Minimal High contrast Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
