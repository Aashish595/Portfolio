import assets from "../assets/assets";

export const projects = [
  /* ================= PERSONAL ================= */

  {
    id: "language-exchange",
    type: "personal",

    title: "Fullstack Chat & Video Calling App",
    description:
      "Real-time language exchange platform with chat, video calls, payments, and modern UI.",

    image: assets.lep,

    liveLink: "https://language-exchange-plateform.onrender.com/",
    githubLink: "https://github.com/Aashish595/Language-Exchange-Plateform",

    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
      "Zustand",
      "WebRTC",
    ],

    filters: ["React", "Full Stack", "Backend"],
  },

{
  id: "food-delivery-app",
  type: "personal",

  title: "Food Delivery Web Application",
  description:
    "Full-stack food delivery application with cart system, admin dashboard, image uploads, and secure Stripe-based online payments.",

  image: assets.foodDelivery,

  liveLink: "https://food-delivery-frontend-tsqv.onrender.com/",
  githubLink: "https://github.com/Aashish595/Food-delivery-App",

  stack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Stripe",
    "Axios",
    "Multer",
    "Cloudinary",
  ],

  filters: ["React", "Full Stack", "Backend"],
},

{
  id: "nextjs-post-management",
  type: "personal",

  title: "Next.js Full-Stack Post Management Application",
  description:
    "A scalable full-stack post management platform built with Next.js (App Router). It supports JWT-based authentication using HttpOnly cookies, role-based access control (Admin/User), media uploads via Cloudinary, cursor-based pagination for performance, and API rate limiting for security. The system is designed with clear separation between admin and user responsibilities, focusing on backend scalability and secure architecture.",

  image: assets.finsocial,

  stack: [
    "Next.js (App Router)",
    "Tailwind CSS",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "HttpOnly Cookies",
    "Cloudinary",
    "Cursor-Based Pagination",
    "API Rate Limiting",
  ],

  filters: ["Next.js", "Full Stack", "Backend", "Scalable"],

  liveLink: "https://finsocial-media-plateform.vercel.app/",
  githubLink: "https://github.com/Aashish595/finsocial-media-plateform",
},

{
  id: "deepseek-ai-chat",
  type: "personal",

  title: "DeepSeek – AI Chat Application",
  description:
    "AI-powered chat application built with Next.js featuring secure authentication, real-time AI responses, markdown rendering, and syntax-highlighted code blocks for developers.",

  image: assets.deepseekClone, 

  liveLink: "https://deepseek-clone-pi-one.vercel.app/",
  githubLink: "https://github.com/Aashish595/Deepseek_clone.git",

  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "OpenAI",
    "Groq",
    "MongoDB",
    "Clerk Auth",
    "PrismJS",
  ],

  filters: ["Next.js", "React", "AI", "Full Stack"],
}, 
{
  id: "sweet-shop",
  type: "personal",

  title: "Sweet Shop Management System",
  description:
    "A full-stack web application for managing and purchasing sweets with secure JWT authentication, role-based access (Admin/User), inventory management, and a modern React dashboard.",

  image: assets.sweetShop, 

  stack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "JWT Authentication"
  ],

  filters: ["React", "Full Stack"],

  liveLink: "https://sweet-shop-management-system-peach-rho.vercel.app/",
  githubLink: "https://github.com/yourusername/sweetshop-app" 
}
,
{
  id: "apnisec",
  type: "personal",

  title: "ApniSec — Full-Stack Cybersecurity Platform",
  description:
    "ApniSec is a production-ready full-stack cybersecurity SaaS platform built with Next.js and TypeScript. It features custom JWT authentication, rate-limited APIs, OOP-based backend architecture, issue management (Cloud Security, VAPT, Red Team), email notifications, and an SEO-optimized modern dashboard designed with enterprise-grade security and scalability in mind.",

  image: assets.apniSec, 

  stack: [
    "Next.js (App Router)",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "Mongoose",
    "JWT Authentication",
    "OOP Architecture",
    "Rate Limiting",
    "Email Integration",
  ],

  filters: ["Next.js", "Full Stack", "SaaS", "Security"],

  liveLink: "https://sde-intern-assignment-psi.vercel.app/", 
  githubLink: "https://github.com/Aashish595/SDE-intern-assignment",
},





  /* ================= CLIENT ================= */

  {
    id: "vfx-portfolio",
    type: "client",

    title: "VFX Artist Portfolio",
    description:
      "High-end cinematic portfolio website for a professional VFX artist team.",

    image: assets.rareframe,

    liveLink: "https://rare-frame-liart.vercel.app/",
    githubLink: null,

    stack: ["Next.js", "Tailwind", "Framer Motion"],

    filters: ["Next.js", "React"],
  },
  {
  id: "glitch-studio-vfx",
  type: "client",

  title: "Glitch Studio – VFX & Animation Portfolio",
  description:
    "Cinematic portfolio website for Glitch Studio, a professional VFX team specializing in 2D & 3D animation, visual effects, and creative storytelling.",

  image: assets.glitchStudio,

  liveLink: "https://glitchstudio.in/", 
  githubLink: "https://github.com/Aashish595/Glitch-studio-", 

  stack: [
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
  ],

  filters: ["Next.js", "React"],
},
{
  id: "mark-spark",
  type: "client",

  title: "Mark & Spark – Laser Printing Business Website",
  description:
    "A modern business website for Mark & Spark, a laser printing and engraving company.",

  image: assets.laserPrinting,

  stack: [                    
    "React",
    "Tailwind CSS",
    "Framer Motion",
  ],

  filters: ["React"],          

  liveLink: "https://markandspark.in", 
  githubLink: "https://github.com/Aashish595/laser-printing.git",
}



];
export const FILTERS = ["All", "React", "Next.js", "Full Stack", "Backend", "AI"];
