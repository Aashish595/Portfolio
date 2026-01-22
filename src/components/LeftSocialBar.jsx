import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";

export default function LeftSocialBar() {
  // subtle mouse-follow movement
  useEffect(() => {
    const handleMove = (e) => {
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.documentElement.style.setProperty(
        "--social-bar-move",
        `${y}px`
      );
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50
                 flex-col items-center gap-6 transition-transform duration-300"
      style={{ transform: "translateY(var(--social-bar-move, 0px))" }}
    >
      {/* Top gradient line */}
      <div className="h-32 w-[2px] bg-gradient-to-b from-white/60 to-transparent" />

      <SocialIcon href="https://github.com/Aashish595">
        <Github size={18} />
      </SocialIcon>

      <SocialIcon href="https://www.linkedin.com/in/aashish959/">
        <Linkedin size={18} />
      </SocialIcon>

      <SocialIcon href="mailto:aashishmaurya959@gmail.com">
        <Mail size={18} />
      </SocialIcon>

      {/* Bottom gradient line */}
      <div className="h-32 w-[2px] bg-gradient-to-t from-white/60 to-transparent" />
    </div>
  );
}

/* ================= SOCIAL ICON ================= */

const SocialIcon = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-10 h-10 flex items-center justify-center
               rounded-full border border-white/10
               text-white/70
               hover:text-white
               hover:scale-110
               hover:border-cyan-400/40
               hover:bg-cyan-400/10
               transition-all duration-300"
  >
    {children}
  </a>
);
