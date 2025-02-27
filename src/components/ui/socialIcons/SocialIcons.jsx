import { Link } from "react-router-dom";
import { iconData } from "@/services/data";

import "./socialIcons.css";

const SocialIcons = ({ bg = "light-black" }) => {
  return (
    <div className="social-icons">
      {iconData.map((icon) => {
        return (
          <Link
            to={icon.link}
            key={icon.title}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
            style={{
              backgroundColor:
                bg === "black" ? "var(--black)" : "var(--light-black)",
            }}
            title={icon.title}
          >
            {icon.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
