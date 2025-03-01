import gsap from "gsap";
import "./cursor.css";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    gsap.set(cursor, { display: "none" });
    const handleMouseMove = (e) => {
      const cursor = document.getElementById("cursor");
      if (cursor) {
        gsap.set(cursor, { display: "block" });
        const { clientX, clientY } = e;
        gsap.to(cursor, {
          x: clientX - 20 / 2,
          y: clientY - 20 / 2,
          duration: 0.3,
          delay: 0,
          ease: "power1.out",
        });
      }
    };

    if (window.innerWidth > 768) {
      // Adjust the width as needed for your breakpoint
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const addScaleEffect = (items, scale = 4) => {
      items.forEach((tag) => {
        tag.addEventListener("mouseover", () => {
          gsap.to("#cursor", {
            scale: scale,
            duration: 0.3,
            delay: 0,
            ease: "power1.out",
          });
        });
        tag.addEventListener("mouseout", () => {
          gsap.to("#cursor", {
            scale: 1,
            duration: 0.3,
            delay: 0,
            ease: "power1.out",
          });
        });
      });
    };

    if (window.innerWidth > 768) {
      // Adjust the width as needed for your breakpoint
      const aTag = document.querySelectorAll("a");
      const btnTag = document.querySelectorAll("button");
      const clickTag = document.querySelectorAll(".clickable");

      addScaleEffect(aTag);
      addScaleEffect(btnTag);
      addScaleEffect(clickTag, 2.5);
    }
  }, []);

  return <>{window.innerWidth > 768 && <div id="cursor"></div>}</>;
};

export default Cursor;
