import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="portfolio-contact section-container" id="contact">
      <div className="portfolio-contact__inner">
        <p className="portfolio-contact__eyebrow">Let’s Connect</p>

        <div className="portfolio-contact__grid">
          <div className="portfolio-contact__left">
            <h2 className="portfolio-contact__title">
              Have an idea, project, or just want to say hello?
            </h2>

            <p className="portfolio-contact__desc">
              I’m open to freelance work, collaborations, and creative
              conversations. Feel free to reach out through email or social
              platforms.
            </p>

            <div className="portfolio-contact__pillRow">
              <span className="portfolio-contact__pill">Freelance</span>
              <span className="portfolio-contact__pill">Collaborations</span>
              <span className="portfolio-contact__pill">Open to Ideas</span>
            </div>

            <a
              href="mailto:aashishmaurya959@gmail.com"
              className="portfolio-contact__cta"
              data-cursor="disable"
            >
              <span>Start a Conversation</span>
              <MdArrowOutward />
            </a>

            <div className="portfolio-contact__glow" />
          </div>

          <div className="portfolio-contact__card portfolio-contact__info">
            <div className="portfolio-contact__row">
              <span className="portfolio-contact__label">Email</span>
              <a
                href="mailto:aashishmaurya959@gmail.com"
                data-cursor="disable"
                className="portfolio-contact__value"
              >
                aashishmaurya959@gmail.com
              </a>
            </div>

            <div className="portfolio-contact__row">
              <span className="portfolio-contact__label">Phone</span>
              <p className="portfolio-contact__value">+91 9919454692</p>
            </div>

            <div className="portfolio-contact__row">
              <span className="portfolio-contact__label">Location</span>
              <p className="portfolio-contact__value">Uttar Pradesh, India</p>
            </div>
          </div>
        </div>

        <div className="portfolio-contact__card portfolio-contact__socials">
          <a
            href="https://github.com/Aashish595"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="portfolio-contact__socialCard"
          >
            <span>GitHub</span>
            <MdArrowOutward />
          </a>

          <a
            href="https://www.linkedin.com/in/aashish959/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="portfolio-contact__socialCard"
          >
            <span>LinkedIn</span>
            <MdArrowOutward />
          </a>

          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="portfolio-contact__socialCard"
          >
            <span>LeetCode</span>
            <MdArrowOutward />
          </a>

          <a
            href="https://www.instagram.com/aashish.maurya_/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
            className="portfolio-contact__socialCard"
          >
            <span>Instagram</span>
            <MdArrowOutward />
          </a>
        </div>

        <div className="portfolio-contact__footer">
          <p className="portfolio-contact__credit">
            Designed and Developed by <span>Gurudas Maurya</span>
          </p>

          <p className="portfolio-contact__copyright">
            <MdCopyright />
            <span>2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
