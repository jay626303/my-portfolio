import { jsPDF } from "jspdf";

export function generateResumePDF() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Page Dimensions: 210mm x 297mm
  // Margins: 18mm margins on each side
  const leftMargin = 18;
  const rightMargin = 182; // 210 - 18
  const contentWidth = 174; // 210 - 2 * 18

  let y = 18;

  // Helper for text matching and wrapping
  const drawText = (text: string, x: number, yPos: number, options?: any) => {
    doc.text(text, x, yPos, options);
  };

  // 1. Name & Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // Slate 900
  drawText("JAYPRAKASH AHIRWAR", 105, y, { align: "center" });

  y += 6;

  // Contact Info row
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105); // Slate 600
  drawText("Bhopal, Madhya Pradesh  |  +91-6263039630  |  jayprakashahirwar6268@gmail.com", 105, y, { align: "center" });
  
  y += 5;
  drawText("linkedin.com/in/jayprakash-ahirwar", 105, y, { align: "center" });

  y += 8;

  // Section divider drawing utility
  const drawSectionHeader = (title: string) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42); // Slate 900
    drawText(title, leftMargin, y);
    
    // Draw continuous divider bar
    doc.setDrawColor(203, 213, 225); // Slate 300
    doc.setLineWidth(0.35);
    doc.line(leftMargin, y + 2, rightMargin, y + 2);
    
    y += 7;
  };

  // SUMMARY
  drawSectionHeader("SUMMARY");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85); // Slate 700
  const summaryText = "B.Tech Computer Science student seeking a frontend developer role with skills in responsive design, UI optimization, and modern web technologies to build high-performance web applications.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, leftMargin, y);
  y += (splitSummary.length * 4.5) + 6;

  // EDUCATION
  drawSectionHeader("EDUCATION");
  
  // Education 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  drawText("B.Tech in Computer Science", leftMargin, y);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  drawText("2022 – 2026", rightMargin, y, { align: "right" });
  
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  drawText("Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal", leftMargin, y);
  
  y += 6.5;

  // Education 2
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  drawText("12th (PCM)", leftMargin, y);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  drawText("2022", rightMargin, y, { align: "right" });
  
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  drawText("MP Board", leftMargin, y);
  
  y += 6.5;

  // Education 3
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  drawText("10th", leftMargin, y);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  drawText("2020", rightMargin, y, { align: "right" });
  
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  drawText("MP Board", leftMargin, y);
  
  y += 8;

  // SKILLS
  drawSectionHeader("SKILLS");
  const skillsList = [
    { name: "Languages", content: "Python, C++, JavaScript" },
    { name: "Frontend", content: "HTML, CSS, React.js, Next.js" },
    { name: "Web Concepts", content: "Responsive Design, Cross-browser Compatibility, UI Optimization, Performance Optimization" },
    { name: "Tools", content: "Git, GitHub, VS Code, Netlify, Vercel" },
    { name: "Design & CMS", content: "Figma, Shopify, WordPress, Photoshop, Canva" },
  ];

  skillsList.forEach((skill) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    drawText(`${skill.name}: `, leftMargin, y);
    
    const labelWidth = doc.getTextWidth(`${skill.name}: `);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    
    const splitContent = doc.splitTextToSize(skill.content, contentWidth - labelWidth);
    doc.text(splitContent, leftMargin + labelWidth, y);
    y += (splitContent.length * 4.5) + 1.5;
  });
  
  y += 5;

  // PROJECTS
  drawSectionHeader("PROJECTS");
  
  // Project 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  drawText("Portfolio Website", leftMargin, y);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  drawText("2024", rightMargin, y, { align: "right" });
  
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  
  const proj1Bullets = [
    "Built responsive portfolio using HTML, CSS, JavaScript.",
    "Implemented modern UI using Flexbox, Grid, and animations.",
    "Applied UI optimization and performance optimization techniques."
  ];
  
  proj1Bullets.forEach((bullet) => {
    doc.text("•", leftMargin, y);
    const wrapBullet = doc.splitTextToSize(bullet, contentWidth - 4);
    doc.text(wrapBullet, leftMargin + 4, y);
    y += (wrapBullet.length * 4.4);
  });
  
  y += 2.5;

  // Project 2
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  drawText("Notes Management App", leftMargin, y);
  
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  drawText("2024", rightMargin, y, { align: "right" });
  
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  
  const proj2Bullets = [
    "Developed a basic notes management system."
  ];
  
  proj2Bullets.forEach((bullet) => {
    doc.text("•", leftMargin, y);
    const wrapBullet = doc.splitTextToSize(bullet, contentWidth - 4);
    doc.text(wrapBullet, leftMargin + 4, y);
    y += (wrapBullet.length * 4.4);
  });

  y += 5;

  // EXPERIENCE
  drawSectionHeader("EXPERIENCE");
  
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  drawText("Frontend Developer Intern", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  drawText("Jun 2024 – Aug 2024", rightMargin, y, { align: "right" });
  
  y += 4.5;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  drawText("Code Alpha", leftMargin, y);
  
  y += 4.5;
  
  const expBullets = [
    "Developed UI using HTML and CSS with focus on responsive design.",
    "Worked with Canva and design tools for better UI layouts.",
    "Ensured cross-browser compatibility and clean design structure."
  ];

  expBullets.forEach((bullet) => {
    doc.text("•", leftMargin, y);
    const wrapBullet = doc.splitTextToSize(bullet, contentWidth - 4);
    doc.text(wrapBullet, leftMargin + 4, y);
    y += (wrapBullet.length * 4.4);
  });

  y += 5;

  // CERTIFICATIONS & ACHIEVEMENTS
  drawSectionHeader("CERTIFICATIONS & ACHIEVEMENTS");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);

  const certBullets = [
    "Web Development Certification – BECIL",
    "Built and deployed frontend projects.",
    "Strong understanding of responsive web design principles."
  ];

  certBullets.forEach((bullet) => {
    doc.text("•", leftMargin, y);
    const wrapBullet = doc.splitTextToSize(bullet, contentWidth - 4);
    doc.text(wrapBullet, leftMargin + 4, y);
    y += (wrapBullet.length * 4.4);
  });

  y += 5;

  // SOFT SKILLS & LANGUAGES
  drawSectionHeader("SOFT SKILLS & LANGUAGES");
  
  // Soft Skills row
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  drawText("Soft Skills: ", leftMargin, y);
  let labelW = doc.getTextWidth("Soft Skills: ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  drawText("Quick Learner, Problem Solving, Team Collaboration", leftMargin + labelW, y);

  y += 5.5;

  // Languages row
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  drawText("Languages: ", leftMargin, y);
  labelW = doc.getTextWidth("Languages: ");
  doc.setFont("helvetica", "normal");
  doc.setTextColor(51, 65, 85);
  drawText("English (Professional), Hindi (Native)", leftMargin + labelW, y);

  // Trigger A4 PDF download
  doc.save("Jayprakash_Ahirwar_Resume.pdf");
}
