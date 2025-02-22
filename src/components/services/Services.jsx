import { PrimaryBtn } from "@/components/ui/btns/Btns";
import { serviceList } from "@/services/data";

import "./services.css";

const Services = () => {
  return (
    <div className="services-container section" id="services">
      <ServicesInfo />
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

const ServicesInfo = () => {
  return (
    <div className="services-info-container">
      <aside className="services-info">
        <h2 className="section-heading">My Services</h2>
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
