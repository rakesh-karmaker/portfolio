import { PrimaryBtn } from "@/components/ui/btns/Btns";
import { serviceList } from "@/services/data";

import "./services.css";
import Scrambler from "@/utils/Scrambler";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRender } from "@/contexts/RenderContext";
import { useState } from "react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const { start } = useRender();
  const [completed, setCompleted] = useState(false);

  useGSAP(() => {
    gsap.set(".services", { autoAlpha: 0, y: 100 });
    gsap.set(".services-info > div", { autoAlpha: 0, y: 75 });

    if (!start || !completed) return null;

    gsap.to(".services-info > div", {
      autoAlpha: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out",
    });

    gsap.to(".services", {
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: "power1.out",
    });
  }, [start, completed]);

  return (
    <div className="services-container section" id="services">
      <ServicesInfo setCompleted={setCompleted} />
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
    <div className="service">
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

const ServicesInfo = ({ setCompleted }) => {
  return (
    <div className="services-info-container">
      <aside className="services-info">
        <h2 className="section-heading">
          <Scrambler text="My Services" setCompleted={setCompleted} />
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
