import { techs } from "@/services/data";
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

export default TechsSwiper;
