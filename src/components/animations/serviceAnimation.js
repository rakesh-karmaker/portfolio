import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const initServiceAnimations = (completed) => {
  gsap.set(".services", { autoAlpha: 0, y: 100 });
  gsap.set(".services-info > div", { autoAlpha: 0, y: 75 });

  if (!completed) return null;

  gsap.to(".services-info > div", {
    autoAlpha: 1,
    y: 0,
    duration: 0.3,
    ease: "power1.out",
  });

  gsap.to(".services", {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    ease: "power1.out",
  });
};

export default initServiceAnimations;
