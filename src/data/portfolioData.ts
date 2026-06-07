export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; proficiency: number }[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Achievement {
  text: string;
}

export const portfolioData = {
  personal: {
    name: "Jayprakash Ahirwar",
    role: "Frontend Developer",
    location: "Bhopal, Madhya Pradesh",
    email: "jayprakashahirwar6268@gmail.com",
    linkedin: "https://linkedin.com/in/jayprakash-ahirwar",
    github: "https://github.com/",
    summary:
      "B.Tech Computer Science student passionate about frontend development, responsive design, UI optimization, and building modern, high-performance web applications with clean interactions.",
  },
  skills: [
    {
      category: "Frontend Dev",
      skills: [
        { name: "HTML", proficiency: 95 },
        { name: "CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 88 },
        { name: "React.js", proficiency: 85 },
        { name: "Next.js", proficiency: 80 },
      ],
    },
    {
      category: "Programming Core",
      skills: [
        { name: "Python", proficiency: 75 },
        { name: "C++", proficiency: 80 },
      ],
    },
    {
      category: "Web Engineering",
      skills: [
        { name: "Responsive Design", proficiency: 95 },
        { name: "Cross-browser Support", proficiency: 90 },
        { name: "UI Optimization", proficiency: 88 },
        { name: "Performance Tune-up", proficiency: 85 },
      ],
    },
    {
      category: "Tools & Deployments",
      skills: [
        { name: "Git & GitHub", proficiency: 85 },
        { name: "VS Code", proficiency: 90 },
        { name: "Vercel / Netlify", proficiency: 85 },
      ],
    },
    {
      category: "Design & UX",
      skills: [
        { name: "Figma", proficiency: 80 },
        { name: "Canva", proficiency: 85 },
        { name: "Photoshop", proficiency: 70 },
        { name: "WordPress / Shopify", proficiency: 75 },
      ],
    },
  ] as SkillGroup[],
  projects: [
    {
      id: "portfolio",
      title: "Premium Developer Portfolio",
      date: "2024",
      description:
        "An award-winning futuristic cinematic portfolio experience containing customized mouse elastic trails, parallax grids, and responsive dark glassmorphism layout modules.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
    {
      id: "notes-app",
      title: "GridNotes Management System",
      date: "2024",
      description:
        "A fast notes organization interface featuring intuitive clean blocks, custom search indices, and interactive persistence layers to safely hold quick records.",
      tags: ["React.js", "Tailwind CSS", "Local Storage", "Lucide Icons"],
      liveUrl: "#",
      githubUrl: "https://github.com/",
    },
  ] as Project[],
  experiences: [
    {
      role: "Frontend Developer Intern",
      company: "Code Alpha",
      duration: "Jun 2024 – Aug 2024",
      responsibilities: [
        "Developed responsive user interfaces with extreme pixel precision using HTML and CSS layouts.",
        "Created polished modern bento grids and item list matrices prioritizing responsive readability.",
        "Refined legacy interfaces to achieve uniform, cross-browser compatibility across Safari, Chrome, and Firefox.",
        "Worked closely with Canva, Figma layouts, and visual mockups to bridge asset-to-rendering gaps.",
      ],
    } as Experience,
  ],
  certifications: [
    {
      name: "Web Development Certification",
      issuer: "BECIL (Broadcast Engineering Consultants India Limited)",
    },
  ] as Certification[],
  achievements: [
    { text: "Successfully built and deployed multiple high-end responsive frontend products on cloud hosts." },
    { text: "Deep specialization and mastery of state handling, component-driven layouts, and fluid UI micro-interactions." },
    { text: "Detailed experience in UI load speed optimization, asset minification, and visual layer budget tuning." },
  ] as Achievement[],
};
