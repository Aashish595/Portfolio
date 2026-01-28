import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import Background3D from "./Background3D";
import assets from "../assets/assets";

export default function HeroSection() {
  const heroRef = useRef(null);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    {
      icon: Github,
      url: "https://github.com/Aashish595",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aashish959/",
    },
    {
      icon: Mail,
      url: "mailto:aashishmaurya959@gmail.com",
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen pt-24 flex items-center overflow-hidden
      bg-[#020617] text-white"
    >
      {/*  Minimal moving stars */}
      <Background3D />

      {/*  Nebula gradient overlay */}
      <div
        className="absolute inset-0 z-[1]
        bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.12),transparent_55%),
            radial-gradient(ellipse_at_bottom_right,rgba(148,163,184,0.08),transparent_60%)]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Focused ambient glow behind text */}
        <div
          aria-hidden
          className="absolute -left-24 top-1/2 -translate-y-1/2
          w-[420px] h-[420px] rounded-full
          bg-indigo-500/15 blur-[90px]"
        />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="relative space-y-6 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-glow">
              Hi, I’m Gurudas Maurya
              <span className="ml-2 text-base sm:text-lg font-normal text-gray-400">
                (Aashish)
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl text-gray-400">
              <span className="font-medium text-gray-200">
                Software Engineer –
              </span>

              <Typewriter
                words={["MERN Stack", "Next.js", "Node.js"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1600}
              />
            </div>

            <p className="text-gray-400 max-w-lg leading-relaxed">
              1+ year experienced Software Engineer with strong{" "}
              <span className="text-gray-200">DSA and problem-solving</span>{" "}
              skills, building reliable{" "}
              <span className="text-gray-200">Web Applications</span> and
              delivering fast, high-quality solutions.
            </p>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-md bg-white text-black font-medium
                hover:bg-gray-200 transition"
              >
                View Work ↓
              </button>

              <a
                href="/Gurudas_Maurya_MERN_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-md border border-gray-700
             text-gray-300 hover:border-gray-500 transition"
              >
                Resume
              </a>
            </div>

            {/* Social */}
            {/* Social */}
            <div className="flex gap-5 pt-8">
              {socials.map(({ icon: Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-gray-700
                 hover:border-gray-500 transition"
                >
                  <Icon className="h-5 w-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Soft outer glow */}
              <div
                className="absolute inset-0 rounded-full blur-xl
                bg-gradient-to-tr from-indigo-500/25 via-slate-400/10 to-transparent"
              />

              {/* Border ring */}
              <div
                className="relative rounded-full p-[2px]
                bg-gradient-to-tr from-slate-500/50 to-slate-700/30"
              >
                <div
                  className="w-72 h-72 sm:w-80 sm:h-80
                  rounded-full bg-[#0B0F19] p-2
                  border border-slate-700"
                >
                  <img
                    src={assets.mainPhoto}
                    alt="profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
