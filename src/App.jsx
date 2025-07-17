import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import DSASection from "./components/DSASection";
import ResumeSection from "./components/ResumeSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main
      className="min-h-screen transition-all
  bg-gradient-to-br from-blue-950 via-purple-900 to-black text-white
  dark:from-gray-900 dark:via-gray-800 dark:to-black"
    >
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <DSASection />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
