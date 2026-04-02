import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me">
        <p className="about-label">ABOUT ME</p>

        <h2 className="about-heading">
          Software Engineer building scalable full-stack and AI-powered
          products.
        </h2>

        <p className="about-text">
          I have 1+ year of experience developing modern web applications and
          backend systems using Next.js, React, Node.js, FastAPI, and
          TypeScript.
        </p>

        <p className="about-subtext">
          My focus is on backend architecture, API development, performance
          optimization, and building reliable production-ready solutions.
        </p>

        <div className="about-dsa">
          <h4>Problem Solving & Data Structures</h4>

          <ul>
            <li>Strong foundation in Arrays, Strings, Recursion, and Hashing</li>
            <li>Good understanding of Trees, Graphs, Stack, and Queue</li>
            <li>Focus on time and space complexity optimization</li>
            <li>Clean, scalable, and production-quality coding practices</li>
          </ul>

          <div className="about-platforms">
            <a
              href="https://leetcode.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
            >
              LeetCode ↗
            </a>

            <a
              href="https://auth.geeksforgeeks.org/user/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="platform-link"
            >
              GeeksforGeeks ↗
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;