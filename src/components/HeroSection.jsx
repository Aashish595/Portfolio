import { useEffect, useRef } from "react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import assets from "../assets/assets";

export default function HeroSection() {
  const heroRef = useRef(null);

  // Mouse movement gradient effect
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      hero.style.background = `
        radial-gradient(circle at ${x}% ${y}%, rgba(59,130,246,0.15) 0%, rgba(147,51,234,0.1) 25%, transparent 50%),
        linear-gradient(135deg, rgba(59,130,246,0.1), rgba(147,51,234,0.05))
      `;
    };

    hero.addEventListener("mousemove", handleMouseMove);
    return () => hero.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20"
    >
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 to-purple-600/20 rounded-full blur-md animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 to-pink-600/20 rounded-full blur-md animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="z-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Gurudas Maurya
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300">
              Mern Stack Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
              I craft scalable web apps with clean code & seamless UX.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                View My Work <ArrowDown className="inline ml-2 h-4 w-4" />
              </button>
              <button className="px-6 py-3 border-2 text-gray-900 dark:text-white rounded-md shadow-lg hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition">
                <Download className="inline mr-2 h-4 w-4" />
                Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[Github, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 p-2">
                  <img
                    src={assets.mainPhoto}
                    alt="aashish maurya"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-300" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
