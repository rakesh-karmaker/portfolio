import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const initFaqAnimations = (start) => {
  gsap.set(".faqs-title", { autoAlpha: 0, y: 50 });
  gsap.set(".faqs-container", { autoAlpha: 0, y: 50 });
  if (!start) return;

  gsap.to(".faqs-title", {
    autoAlpha: 1,
    y: 0,
    duration: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".faqs-title",
      start: "top 60%",
    },
  });

  gsap.to(".faqs-container", {
    autoAlpha: 1,
    y: 0,
    duration: 0.5,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".faqs-container",
    },
  });
};

export default initFaqAnimations;
