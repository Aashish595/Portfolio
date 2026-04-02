import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { destroyLenis, getLenis, initLenis, stopLenis } from "./utils/lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    const lenis = initLenis();
    lenis.scrollTo(0, { immediate: true });
    stopLenis();

    const clickHandler = (e: Event) => {
      if (window.innerWidth <= 1024) return;

      e.preventDefault();
      const currentTarget = e.currentTarget as HTMLAnchorElement | null;
      const section = currentTarget?.getAttribute("data-href");

      if (section) {
        getLenis()?.scrollTo(section, { duration: 1.2 });
      }
    };

    const links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      element.addEventListener("click", clickHandler);
    });

    const resizeHandler = () => ScrollTrigger.refresh(true);
    window.addEventListener("resize", resizeHandler);

    return () => {
      links.forEach((elem) => {
        const element = elem as HTMLAnchorElement;
        element.removeEventListener("click", clickHandler);
      });
      window.removeEventListener("resize", resizeHandler);
      destroyLenis();
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          GM
        </a>
        <a
          href="mailto:aashishmaurya959@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          aashishmaurya959@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          {/* <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li> */}
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
