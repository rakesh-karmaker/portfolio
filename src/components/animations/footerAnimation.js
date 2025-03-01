import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const initFooterAnimations = (start) => {
  gsap.set(".footer-info .details, .info-section, .copyright > span", {
    autoAlpha: 0,
    scale: 0.9,
  });
  gsap.set(".footer-info .social-icons", { autoAlpha: 0, y: 50 });
  if (!start) return;

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".footer-right",
        start: "top 60%",
      },
      defaults: {
        ease: "power1.out",
      },
    })
    .to(".footer-info .details", {
      autoAlpha: 1,
      scale: 1,
      duration: 0.3,
    })
    .to(".footer-info .social-icons", {
      autoAlpha: 1,
      y: 0,
      duration: 0.2,
    })
    .to(".info-section", {
      autoAlpha: 1,
      scale: 1,
      duration: 0.3,
    })
    .to(".copyright > span", {
      autoAlpha: 1,
      scale: 1,
      duration: 0.3,
    });
};

export default initFooterAnimations;
