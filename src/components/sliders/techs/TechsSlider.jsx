import "./techsSlider.css";

const TechsSwiper = () => {
  return (
    <div className="techs-slider" data-animated="true">
      <p className="techs-title">Technologies I use</p>
      <ul className="techs">
        {Array(2)
          .fill(0)
          .map((_, index) => {
            return techs.map((tech, i) => {
              return (
                <li className="tech" key={i + index}>
                  {tech}
                </li>
              );
            });
          })}
      </ul>
    </div>
  );
};

// list of techs i use
const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Node",
  "Express",
  "Bootstrap",
  "jQuery",
  "PHP",
  "MySQL",
  "MongoDB",
  "Git",
  "GitHub",
  "Figma",
  "WordPress",
  "C",
  "C++",
  "Python",
];

export default TechsSwiper;
