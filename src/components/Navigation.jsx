import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider"; // Import global theme context


const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "DSA Work", href: "#dsa" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme(); // Use global theme
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll shadow effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to section by ID
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setMobileMenuOpen(false), 300); // Delay to allow scroll animation
    }
  };

  const renderNavItems = (className) =>
    navItems.map((item) => (
      <button
        key={item.name}
        onClick={() => scrollTo(item.href)}
        className={className}
      >
        {item.name}
      </button>
    ));

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        isScrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          PORTFOLIO
        </span>

        <div className="hidden md:flex space-x-6">
          {renderNavItems(
            "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
          )}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } px-4 pt-2 pb-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-lg space-y-2`}
        >
          {renderNavItems(
            "block text-left w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 text-base"
          )}
        </div>
      )}
    </nav>
  );
}
