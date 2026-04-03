import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Tween;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, SplitText);

let refreshHandlerAdded = false;

function cleanupElement(el: ParaElement) {
  el.anim?.kill();
  el.split?.revert();
  el.anim = undefined;
  el.split = undefined;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  // mobile par split mat karo
  if (window.innerWidth < 900) {
    [...paras, ...titles].forEach((el) => cleanupElement(el));
    ScrollTrigger.refresh();
    return;
  }

  const triggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const toggleAction = "play pause resume reverse";

  paras.forEach((para) => {
    cleanupElement(para);
    para.classList.add("visible");

    const paraSplit = new SplitText(para, {
      type: "lines,words",
      linesClass: "split-line",
    });

    para.split = paraSplit;

    para.anim = gsap.fromTo(
      paraSplit.words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement || para,
          start: triggerStart,
          toggleActions: toggleAction,
        },
      }
    );
  });

  titles.forEach((title) => {
    cleanupElement(title);

    const titleSplit = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });

    title.split = titleSplit;

    title.anim = gsap.fromTo(
      titleSplit.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement || title,
          start: triggerStart,
          toggleActions: toggleAction,
        },
      }
    );
  });

  if (!refreshHandlerAdded) {
    ScrollTrigger.addEventListener("refreshInit", () => {
      [...paras, ...titles].forEach((el) => cleanupElement(el));
    });
    refreshHandlerAdded = true;
  }

  ScrollTrigger.refresh();
}