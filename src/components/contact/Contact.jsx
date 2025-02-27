import { Link } from "react-router-dom";
import { iconData } from "@/services/data";
import ContactForm from "@/components/forms/contact/ContactForm";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section section" id="contact">
      <div className="contact">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="contact-subtitle">Contact me</p>
      <h2 className="contact-title">Get in touch</h2>
      <p className="contact-text">
        It is very important for us to keep in touch with you, so we are always
        ready to answer any question that interests you.
      </p>
      <SocialIcons bg="black" />
    </div>
  );
};

const SocialIcons = ({ bg }) => {
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

export default Contact;
