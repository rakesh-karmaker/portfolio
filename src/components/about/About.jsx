import { PrimaryButton, SecondaryBtn } from "@/components/ui/btns/Btns";
import { aboutDataList } from "@/services/data";

import "./about.css";

const About = () => {
  return (
    <section className="about-container section" id="about">
      <img
        src="/pfp.webp"
        className="pfp"
        alt="a picture of rakesh"
        height="100%"
        width="100%"
      />
      <AboutInfo />
    </section>
  );
};

const AboutInfo = () => {
  return (
    <div className="about-info">
      <h2 className="about-title">
        I am Rakesh, a full stack web developer and a programmer working
        remotely in my home at Dhaka, Bangladesh
      </h2>
      <div className="about-description">
        {aboutDataList.map((data, index) => {
          return (
            <p className="about-para" key={index}>
              {data}
            </p>
          );
        })}
        <div className="about-btns">
          <PrimaryButton onClick={() => window.open("/resume.pdf", "_blank")}>
            My Resume
          </PrimaryButton>
          <SecondaryBtn link="/contact">Hire Me</SecondaryBtn>
        </div>
      </div>
    </div>
  );
};

export default About;
