import { PrimaryBtn } from "@/components/ui/btns/Btns";
import { serviceList } from "@/services/data";

import "./services.css";
import Scrambler from "@/utils/Scrambler";
import { useGSAP } from "@gsap/react";
import { useRender } from "@/contexts/RenderContext";
import { useState } from "react";
import initServiceAnimations from "@/components/animations/serviceAnimation";

const Services = () => {
  const { start } = useRender();
  const [completed, setCompleted] = useState(false);

  useGSAP(() => {
    initServiceAnimations(completed);
  }, [completed]);

  return (
    <div className="services-container section" id="services">
      <ServicesInfo setCompleted={setCompleted} canRun={start} />
      <div className="services">
        {serviceList.map((service) => {
          return <Service key={service.title} service={service} />;
        })}
      </div>
    </div>
  );
};

const Service = ({ service }) => {
  return (
    <div className="service clickable">
      <div>
        <p className="icon">{service.icon}</p>
        <div className="content">
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesInfo = ({ setCompleted, canRun }) => {
  return (
    <div className="services-info-container">
      <aside className="services-info">
        <h2 className="section-heading">
          <Scrambler
            text="My Services"
            setCompleted={setCompleted}
            canRun={canRun}
          />
        </h2>
        <div>
          <p>
            Explore my range of services designed to go beyond aesthetics. I
            craft visually appealing and fully functional websites tailored to
            your business needs.
          </p>
          <PrimaryBtn link={"/about"}>About Me</PrimaryBtn>
        </div>
      </aside>
    </div>
  );
};

export default Services;
