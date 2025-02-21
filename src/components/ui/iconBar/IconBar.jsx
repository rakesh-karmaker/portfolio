import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaDribbble } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./iconBar.css";

const IconBar = () => {
  const iconData = [
    {
      title: "Facebook",
      link: "https://www.facebook.com/rakesh.karmaker.980",
      icon: <FaFacebook />,
    },
    {
      title: "Github",
      link: "https://github.com/rakesh-karmaker",
      icon: <FaGithub />,
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/rakesh-karmaker-a15849322/",
      icon: <IoLogoLinkedin />,
    },
    {
      title: "Dribbble",
      link: "https://dribbble.com/Rakesh_Karmaker",
      icon: <FaDribbble />,
    },
  ];

  return (
    <aside className="icon-bar">
      {iconData.map((icon) => {
        return (
          <Link
            to={icon.link}
            key={icon.title}
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="tooltip">{icon.title}</p>
            {icon.icon}
          </Link>
        );
      })}
      <div className="icon-line"></div>
    </aside>
  );
};

export default IconBar;
