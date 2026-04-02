import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info" id="career">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Finsocial Digital System</h5>
              </div>
              <h3>Jan 2025 - NOW</h3>
            </div>
            <p>
              Building and improving full-stack features for a finance-focused
              AI platform using React.js, FastAPI, and modern database systems.
              Working on scalable backend architecture, API performance, AI
              integrations, and reliable production deployments for smooth
              real-time user experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>Leafny Web Pack Services & Consultancy</h5>
              </div>
              <h3>Sep 2025 - Nov 2025</h3>
            </div>
            <p>
              Built frontend experiences for an AI-based SaaS interview platform
              with Next.js, TypeScript, and Tailwind CSS. Developed onboarding
              flows, dashboards, and evaluation interfaces with a focus on clean
              UI architecture, reusability, and a consistent user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Intern</h4>
                <h5>Bluestock Fintech</h5>
              </div>
              <h3>July 2025 - Aug 2025</h3>
            </div>
            <p>
              Developed a responsive IPO platform using React.js and Tailwind
              CSS, improved admin-side workflows, and built reusable interface
              components that reduced repetition, improved maintainability, and
              supported faster feature development across the product.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Full Stack Developer</h4>
                <h5>Glitch Studio</h5>
              </div>
              <h3>Jan - July 2025</h3>
            </div>
            <p>
              Built and deployed 5+ full-stack applications using React.js,
              Next.js, Node.js, and MongoDB for multiple client projects.
              Developed RESTful APIs, authentication systems, and reusable UI
              components for scalable and secure applications. 
              Managed production deployment on Vercel including domain setup, SSL
              configuration, and hosting.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
