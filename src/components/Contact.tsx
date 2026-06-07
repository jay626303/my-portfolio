import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, MapPin, Send, Clock, CheckCircle } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

export function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API pipeline
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-4 sm:px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Background neon accent glows */}
      <div className="absolute left-10 bottom-1/4 w-[350px] h-[350px] bg-purple/5 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse" />
      <div className="absolute right-10 bottom-0 w-[300px] h-[300px] bg-cyan/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="flex flex-col mb-16 relative">
          <div className="flex items-center gap-2 text-cyan font-mono text-xs uppercase tracking-[0.3em] mb-2">
            <Mail size={12} />
            <span>07 // TRANSMISSION NODE</span>
          </div>
          <h2 className="font-sora text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Initiate Contact
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-purple to-cyan" />
        </div>

        {/* Form and info coordinates split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Coordinates & Social anchor links */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="flex flex-col gap-6">
              <h3 className="font-sora font-extrabold text-2xl text-white tracking-tight mb-2">
                Have a vision? Let’s map it or code it.
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans font-light mb-4">
                Whether seeking to discuss complex layouts, code optimization, internship initiatives, or responsive assets, feel free to send a packet over the wire.
              </p>

              {/* Coordinates details */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 group hover:border-cyan/30 transition-all duration-300">
                  <div className="p-3 bg-cyan/10 rounded-lg text-cyan">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">
                      Direct Packet
                    </span>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="text-white hover:text-cyan text-sm sm:text-base transition-colors font-medium"
                    >
                      {portfolioData.personal.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 group hover:border-blue/30 transition-all duration-300">
                  <div className="p-3 bg-blue/10 rounded-lg text-blue">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">
                      Professional Mesh
                    </span>
                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-blue text-sm sm:text-base transition-colors font-medium"
                    >
                      linkedin.com/in/jayprakash-ahirwar
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/5 group hover:border-purple/30 transition-all duration-300">
                  <div className="p-3 bg-purple/10 rounded-lg text-purple">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 block">
                      Operating Node
                    </span>
                    <span className="text-white text-sm sm:text-base font-medium">
                      Bhopal, Madhya Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick status stamp at the bottom corner for professional look */}
            <div className="hidden lg:flex items-center gap-2 text-white/20 font-mono text-[9px] uppercase tracking-wider py-4 border-t border-white/5 mt-8">
              <Clock size={12} className="text-cyan animate-pulse" />
              <span>Average response window // 12-24 Hours</span>
            </div>
          </div>

          {/* Right Column: Glassmorphism Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-purple via-cyan to-blue" />

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
                {/* Visual grid header */}
                <span className="font-mono text-[9px] uppercase tracking-widest text-cyan/70 font-semibold mb-2 block">
                  SYS TRANSACTION-STREAM INTEGRATION
                </span>

                {/* Name field */}
                <div className="flex flex-col gap-2 relative">
                  <label className="font-poppins font-semibold text-xs text-white/70 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan/70 focus:bg-white/10 transitions"
                  />
                </div>

                {/* Email field */}
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-semibold text-xs text-white/70 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan/70 focus:bg-white/10 transitions"
                  />
                </div>

                {/* Message text environment */}
                <div className="flex flex-col gap-2">
                  <label className="font-poppins font-semibold text-xs text-white/70 uppercase tracking-wider">
                    Detailed Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder="Write your instructions or feedback..."
                    rows={5}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-cyan/70 focus:bg-white/10 resize-none transitions"
                  />
                </div>

                {/* Submission Indicator message feedback */}
                <AnimatePresence mode="wait">
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-xs sm:text-sm rounded-lg flex items-center gap-3"
                    >
                      <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                      <span>Transmission initiated successfully. I'll connect with you soon!</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button with cyber active glowing */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group flex items-center justify-center gap-2 bg-gradient-to-r from-purple to-cyan text-white text-xs uppercase font-poppins tracking-widest font-semibold py-4 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] disabled:opacity-50 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/10 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? "Initiating Transmission..." : "Send Message"}
                    {!isSubmitting && <Send size={12} />}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
