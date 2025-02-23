import { Link } from "react-router-dom";
import { iconData } from "@/services/data";

import "./iconBar.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IconBar = ({ start }) => {
  const lineRef = useRef(null);
  useGSAP(() => {
    if (start) {
      const iconTimeline = gsap.timeline();
      iconTimeline.to(lineRef.current, { height: "80px", duration: 0.5 });
      iconTimeline.to(".icon-bar a", {
        scale: 1,
        duration: 0.5,
        stagger: -0.25,
      });
    }
  }, [start]);

  return (
    <aside className="icon-bar">
      {iconData.map((icon) => {
        return (
          <Link
            to={icon.link}
            key={icon.title}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <p className="tooltip">{icon.title}</p>
            {icon.icon}
          </Link>
        );
      })}
      <div className="icon-line" ref={lineRef}></div>
    </aside>
  );
};

export default IconBar;
