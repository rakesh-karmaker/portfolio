import { projectList } from "@/services/data";
import gsap from "gsap";

const initProjectAnimations = (completed) => {
  gsap.set(".projects-container", { autoAlpha: 0, y: 100 });
  if (!completed) return null;

  gsap.to(".projects-container", {
    autoAlpha: 1,
    y: 0,
    duration: 0.6,
    ease: "power1.out",
  });
};

const initProjectImageAnimations = (index, setImageSrc, setLink, imgRef) => {
  setImageSrc("/projects/" + projectList[index].image);
  setLink(projectList[index].link);
  const ele = imgRef.current;
  gsap.set(ele, { autoAlpha: 0, y: 50 });
  gsap.to(ele, { autoAlpha: 1, y: 0, duration: 0.5 });
};

export { initProjectAnimations, initProjectImageAnimations };
