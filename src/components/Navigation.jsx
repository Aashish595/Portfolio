import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  /* Scroll blur */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setMobileMenuOpen(false), 200);
  };

  const renderNavItems = (mobile = false) =>
    navItems.map((item) => {
      const isActive = active === item.href;

      return (
        <button
          key={item.name}
          onClick={() => scrollTo(item.href)}
          className={`
            px-4 py-2 text-sm rounded-lg transition-all duration-200
            ${mobile ? "w-full text-left" : ""}
            ${
              isActive
                ? "text-white bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_30px_rgba(0,0,0,0.3)]"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }
          `}
        >
          {item.name}
        </button>
      );
    });

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <span
          onClick={() => scrollTo("#home")}
          className="cursor-pointer text-lg font-semibold tracking-wide
          text-white/90 hover:text-white transition"
        >
          aashish.dev
        </span>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {renderNavItems()}
        </div>

        {/* Right actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full
            hover:bg-white/5 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full
            hover:bg-white/5 transition"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden mx-4 mt-3 rounded-2xl overflow-hidden
          bg-[#0B0F19]/95 backdrop-blur-xl
          border border-white/10
          transition-all duration-300 ease-out origin-top
          ${
            isMobileMenuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <div className="p-3 space-y-1">
          {renderNavItems(true)}
        </div>
      </div>
    </nav>
  );
}
