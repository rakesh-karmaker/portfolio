import gsap from "gsap";

const initContactAnimations = (completed) => {
  gsap.set(".contact-text, .contact-info .social-icons", {
    autoAlpha: 0,
    y: 35,
  });
  gsap.set(".contact-form", {
    autoAlpha: 0,
    x: 35,
  });
  gsap.set(".contact-form-container", { overflow: "hidden" });
  if (!completed) return null;

  gsap
    .timeline()
    .to(".contact-text, .contact-info .social-icons", {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
    })
    .to(".contact-form", {
      autoAlpha: 1,
      x: 0,
      duration: 0.3,
      ease: "power1.out",
    })
    .set(".contact-form-container", { overflow: "auto" });
};

export default initContactAnimations;
