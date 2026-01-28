import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ExperienceSection from "./components/ExperienceSection";
import Cursor from "./components/Cursor";
import ProjectsSection from "./components/ProjectSection";


function App() {
  return (
    <main className="min-h-screen bg-[#0b0d14] text-slate-200 selection:bg-indigo-500/30">
      <Cursor />
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
