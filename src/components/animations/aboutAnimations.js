import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const initAboutAnimations = (start) => {
  gsap.set(".pfp", { autoAlpha: 0, scale: 0.9 });
  gsap.set(".about-title", { autoAlpha: 0, y: 50 });
  gsap.set(".about-description > p", { autoAlpha: 0, y: 20 });
  gsap.set(".about-btns", { autoAlpha: 0 });

  if (!start) return;

  gsap.to(".pfp", {
    autoAlpha: 1,
    scale: 1,
    duration: 0.3,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".pfp",
      start: "top 70%",
    },
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".about-info",
        start: "top 40%",
      },
    })
    .to(".about-title", {
      autoAlpha: 1,
      y: 0,
      duration: 0.2,
      ease: "power1.out",
    })
    .to(".about-description > p", {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
      stagger: 0.2,
    })
    .to(".about-btns", {
      autoAlpha: 1,
      duration: 0.3,
      ease: "power1.out",
    });
};

export default initAboutAnimations;
