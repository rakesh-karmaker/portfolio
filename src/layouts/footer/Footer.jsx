import { PrimaryButton } from "@/components/ui/btns/Btns";
import SocialIcons from "@/components/ui/socialIcons/SocialIcons";
import { contactInfo, pages } from "@/services/data";
import { Link, NavLink } from "react-router-dom";

import "./footer.css";
import Scrambler from "@/utils/Scrambler";
import { useRender } from "@/contexts/RenderContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import initFooterAnimations from "@/components/animations/footerAnimation";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { start } = useRender();
  useGSAP(() => {
    initFooterAnimations(start);
  }, [start]);
  return (
    <footer>
      <FooterInfo canRun={start} />
      <FooterRight />
    </footer>
  );
};

const FooterRight = () => {
  return (
    <div className="footer-right">
      <div className="info-section">
        <div className="contact-info">
          <h3>Contact me</h3>
          <div>
            {contactInfo.map((info, index) => {
              return (
                <div className="info" key={index}>
                  <h4>{info.title}:</h4>

                  {info?.link ? (
                    <Link to={info.link}>{info.text}</Link>
                  ) : (
                    <pre>{info.text}</pre>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pages">
          <h3>Pages</h3>
          <PagesList data={pages} />
        </div>
      </div>
      <p className="copyright">
        <span>
          Copyright © {new Date().getFullYear()} Rakesh Karmaker - All rights
          reserved || Designed By:{" "}
          <Link to="https://github.com/rakesh-karmaker">Rakesh</Link>
        </span>
      </p>
    </div>
  );
};

const PagesList = ({ data }) => {
  return (
    <div>
      {data.map((page, index) => {
        return (
          <NavLink to={page.link} key={index}>
            {page.title}
          </NavLink>
        );
      })}
    </div>
  );
};

const FooterInfo = ({ canRun }) => {
  return (
    <div className="footer-info">
      <div className="details">
        <h3>
          <Scrambler text={"Rakesh Karmaker"} canRun={canRun} />
        </h3>
        <div>
          <p>
            I'm a web developer with 3+ years of experience in front-end,
            back-end, and UI/UX design, creating modern, functional websites to
            help businesses grow.
          </p>
          <PrimaryButton onClick={() => window.open("/resume.pdf", "_blank")}>
            My Resume
          </PrimaryButton>
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Footer;
