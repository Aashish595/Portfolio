"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import assets from "../assets/assets";

/* ================= DATA ================= */

const projects = [
  {
    id: 1,
    type: "personal",
    title: "Language Exchange Platform",
    description: "Real-time communication platform with video, chat, and payments.",
    image: assets.lep,
    filters: ["Next.js", "Full Stack", "Backend"],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Stripe"],
    liveLink: "https://language-exchange-plateform.onrender.com/",
    githubLink: "https://github.com/Aashish595/Language-Exchange-Plateform",
  },
  {
    id: 2,
    type: "personal",
    title: "Food Delivery App",
    description: "End-to-end food ordering system with admin dashboard.",
    image: assets.foodDelivery,
    filters: ["React", "Full Stack", "Backend"],
    stack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    liveLink: "https://food-delivery-frontend-tsqv.onrender.com/",
    githubLink: "https://github.com/Aashish595/Food-delivery-App.git",
  },
  {
    id: 3,
    type: "personal",
    title: "AI Coding Assistant",
    description: "AI-powered assistant for coding and problem solving.",
    image: assets.deepseekClone,
    filters: ["Next.js", "AI"],
    stack: ["Next.js", "Google GenAI", "MongoDB"],
    liveLink: "https://deepseek-clone-pi-one.vercel.app/",
    githubLink: "https://github.com/Aashish595/Deepseek_clone.git",
  },
  {
    id: 4,
    type: "client",
    title: "Client E-commerce Platform",
    description: "Production-ready e-commerce solution with secure checkout.",
    image: assets.currencyConverter,
    filters: ["React", "Full Stack"],
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: null,
  },
   {
    id: 5,
    type: "client",
    title: "Client E-commerce Platform",
    description: "Production-ready e-commerce solution with secure checkout.",
    image: assets.currencyConverter,
    filters: ["React", "Full Stack"],
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: null,
  },
  {
    id: 6,
    type: "client",
    title: "Client E-commerce Platform",
    description: "Production-ready e-commerce solution with secure checkout.",
    image: assets.currencyConverter,
    filters: ["React", "Full Stack"],
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: null,
  },
  {
    id: 7,
    type: "client",
    title: "Client E-commerce Platform",
    description: "Production-ready e-commerce solution with secure checkout.",
    image: assets.currencyConverter,
    filters: ["React", "Full Stack"],
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: null,
  },
];

const FILTERS = ["All", "React", "Next.js", "Full Stack", "Backend", "AI"];

/* ================= MAIN ================= */

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = (type) =>
    projects.filter(
      (p) =>
        p.type === type &&
        (activeFilter === "All" || p.filters.includes(activeFilter))
    );

  return (
    <section id="projects" className="py-22 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of personal projects and professional freelance work showcasing scalable and modern solutions.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {FILTERS.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${
                  activeFilter === item
                    ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "bg-slate-900/50 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="space-y-24">
          <ProjectRow title="Personal / Resume Projects" projects={filtered("personal")} />
          <ProjectRow title="Client / Freelance Projects" projects={filtered("client")} />
        </div>
      </div>
    </section>
  );
}

const ProjectRow = ({ title, projects }) => {
  if (projects.length === 0) return null;
  return (
      <div className="space-y-8">
        <div className="flex items-center gap-4">
            <div className="p-2 bg-slate-900 rounded-lg text-blue-400">
                <Layers size={24}/>
            </div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
        <HorizontalSlider projects={projects} />
      </div>
  )
}

/* ================= HORIZONTAL SLIDER ================= */

const HorizontalSlider = ({ projects }) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = containerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft + el.clientWidth < el.scrollWidth - 10
    );
  };

  useEffect(() => updateScrollState(), [projects]);

  const scrollByCard = (dir) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild?.offsetWidth + 24 || 300;
    el.scrollBy({ left: dir === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <div className="relative group/slider">
      {/* ARROWS */}
      <ArrowButton disabled={!canScrollLeft} position="left" onClick={() => scrollByCard("left")} />
      <ArrowButton disabled={!canScrollRight} position="right" onClick={() => scrollByCard("right")} />

      <div
        ref={containerRef}
        onScroll={updateScrollState}
        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="snap-center shrink-0 w-full sm:w-[400px]"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ================= PROJECT CARD ================= */

const ProjectCard = ({ project }) => (
  <div className="group h-full flex flex-col glass-panel rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
    {/* IMAGE */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
        <Icon href={project.liveLink} label="Live Demo">
          <ExternalLink size={20} />
        </Icon>
        {project.githubLink && (
          <Icon href={project.githubLink} label="Source Code">
            <Github size={20} />
          </Icon>
        )}
      </div>
    </div>

    {/* CONTENT */}
    <div className="p-6 flex flex-col grow space-y-4">
      <div className="space-y-2">
        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {project.title}
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
        </p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech, i) => (
          <span
            key={i}
            className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ArrowButton = ({ position, onClick, disabled }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-10 p-3 rounded-full glass-panel text-white transition-all
        ${position === "left" ? "-left-4" : "-right-4"}
        ${disabled ? "opacity-0 pointer-events-none" : "opacity-0 group-hover/slider:opacity-100 hover:bg-blue-600 hover:border-blue-500 scale-90 hover:scale-100"}
      `}
    >
      {position === "left" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

const Icon = ({ href, children, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform shadow-lg group/icon relative"
    aria-label={label}
  >
    {children}
  </a>
);

