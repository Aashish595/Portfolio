import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const projects = [
  {
    title: "Language Exchange Platform",
    category: "Real-Time Communication Platform",
    description:
      "A real-time language exchange platform built for smooth communication with video calling, chat, reactions, and collaborative features.",
    tools:
      "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Zustand, TanStack Query, WebRTC, Stream SDK, JWT",
    features: [
      "1-on-1 and group video calling",
      "Real-time chat, reactions, and screen sharing",
      "JWT authentication with protected routes",
      "Production-ready frontend and backend deployment",
    ],
    image: "/images/lep.png",
    github: "https://github.com/Aashish595/Language-Exchange-Plateform",
    live: "https://language-exchange-plateform.vercel.app/",
  },
  {
    title: "Food Delivery Web Application",
    category: "Full-Stack Ordering & Payments",
    description:
      "A full-stack food ordering platform with secure authentication, cart flow, order lifecycle management, and admin controls.",
    tools:
      "React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Stripe, Axios, Multer, Cloudinary, JWT",
    features: [
      "User authentication and cart flow",
      "Stripe payment integration",
      "Admin panel for product and order management",
      "Image upload and CRUD-based backend architecture",
    ],
    image: "/images/food_delivery.png",
    github: "https://github.com/Aashish595/Food-delivery-App",
    live: "https://food-delivery-frontend-tsqv.onrender.com/",
  },
  {
    title: "DeepSeek AI Chat Application",
    category: "Modern AI SaaS Interface",
    description:
      "A modern AI-powered chat application built with Next.js, featuring secure authentication, real-time AI responses, markdown rendering, and a clean developer-focused interface.",
    tools:
      "Next.js 16, React 19, Tailwind CSS, MongoDB, Mongoose, Clerk, OpenAI SDK, Groq SDK, Axios, React Markdown, PrismJS, React Hot Toast, Svix",
    features: [
      "Secure authentication using Clerk",
      "AI-powered real-time chat with OpenAI and Groq SDK",
      "Markdown and syntax-highlighted code block rendering",
      "Error handling, toast notifications, and scalable project structure",
    ],
    image: "/images/deepseek_clone.png",
    github: "https://github.com/Aashish595/Deepseek_clone",
    live: "https://deepseek-clone-pi-one.vercel.app",
  },
  {
    title: "Glitch Studio Portfolio",
    category: "Cinematic VFX & Animation Portfolio",
    description:
      "A cinematic portfolio website built for Glitch Studio, showcasing VFX, 2D and 3D animation, visual storytelling, and studio services with a premium interactive experience.",
    tools:
      "Next.js, Tailwind CSS, Framer Motion, GSAP",
    features: [
      "High-end cinematic UI with smooth transitions and animations",
      "Team and services showcase for a professional studio brand",
      "Responsive design optimized across devices",
      "Performance-focused and SEO-optimized frontend",
    ],
    image: "/images/glitchStudio.png",
    github: "https://github.com/Aashish595/Glitch-studio-",
    live: "https://glitch-studio.vercel.app/",
  },
  {
    title: "Next.js Post Management Platform",
    category: "Scalable Admin/User Content Platform",
    description:
      "A full-stack post management platform built with Next.js App Router, supporting authentication, role-based access, media uploads, and scalable backend practices.",
    tools:
      "Next.js, Tailwind CSS, MongoDB, Mongoose, JWT, HttpOnly Cookies, Cloudinary, Cursor Pagination, Rate Limiting",
    features: [
      "Role-based access control for admin and user workflows",
      "Secure JWT authentication stored in HttpOnly cookies",
      "Cloudinary image and video upload integration",
      "Cursor-based pagination and API rate limiting for scalability",
    ],
    image: "/images/finsocial.png",
    github: "https://github.com/Aashish595/finsocial-media-plateform",
    live: "https://finsocial-media-plateform.vercel.app/",
  },
  {
    title: "ApniSec Cybersecurity Platform",
    category: "Full-Stack Security SaaS Platform",
    description:
      "A production-ready full-stack cybersecurity platform built with Next.js and TypeScript, featuring secure authentication, issue management, email workflows, and enterprise-style backend architecture.",
    tools:
      "Next.js, TypeScript, Tailwind CSS, MongoDB, Mongoose, JWT, HttpOnly Cookies, Rate Limiting, Nodemailer",
    features: [
      "Custom JWT authentication with secure HTTP-only cookies",
      "Issue management system with CRUD, filtering, and status tracking",
      "OOP-based backend architecture with services and controllers",
      "Automated email workflows for registration, profile updates, and password reset",
    ],
    image: "/images/apniSec.png",
    github: "https://github.com/Aashish595/SDE-intern-assignment",
    live: "https://sde-intern-assignment-psi.vercel.app/",
  },
];
const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>

                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <p className="carousel-description">
                          {project.description}
                        </p>

                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Stack</span>
                          <p>{project.tools}</p>
                        </div>

                        <div className="carousel-features">
                          <span className="tools-label">Key Features</span>
                          <ul>
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="carousel-links">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                          >
                            <FaGithub />
                            <span>GitHub</span>
                          </a>

                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            data-cursor="disable"
                          >
                            <HiOutlineArrowUpRight />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.live || project.github}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;