import { PrimaryBtn, SecondaryBtn } from "@/components/ui/btns/Btns";
import { FaLocationDot } from "react-icons/fa6";
import TitleSwiper from "@/components/sliders/title/TitleSlider";

import "./hero.css";
import TechsSwiper from "@/components/sliders/techs/TechsSlider";

const Hero = () => {
  return (
    <>
      <section className="hero section" id="home">
        <HeroIntro />
        <TechsSwiper />
      </section>
    </>
  );
};

const HeroIntro = () => {
  return (
    <div className="hero-intro">
      <p className="location">
        <FaLocationDot /> <span>Dhaka, Bangladesh</span>
      </p>
      <h1 className="hero-heading">
        <span>I'm Rakesh Karmaker</span> <br />
        <TitleSwiper />
      </h1>
      <p className="hero-para">
        I specialize in researching and analyzing your brand and provide you a
        beautiful and effective website for making a digital standing among your
        competitors
      </p>
      <div className="hero-btns">
        <PrimaryBtn link="/contact">Get yours now</PrimaryBtn>
        <SecondaryBtn link="/projects">See my works</SecondaryBtn>
      </div>
      <div className="hero-bg"></div>
    </div>
  );
};

export default Hero;
