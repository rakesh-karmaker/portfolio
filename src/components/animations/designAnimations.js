import gsap from "gsap";

const initDesignAnimations = (completed) => {
  gsap.set(".design", { autoAlpha: 0, scale: 0.8 });
  if (!completed) return null;

  gsap.to(".design", {
    autoAlpha: 1,
    scale: 1,
    duration: 0.3,
    ease: "power1.inOut",
    stagger: 0.2,
  });
};

export default initDesignAnimations;
