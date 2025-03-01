import ContactForm from "@/components/forms/contact/ContactForm";
import SocialIcons from "@/components/ui/socialIcons/SocialIcons";

import "./contact.css";
import Scrambler from "@/utils/Scrambler";
import { useRender } from "@/contexts/RenderContext";
import { useGSAP } from "@gsap/react";

import { useState } from "react";
import initContactAnimations from "@/components/animations/contactAnimations";

const Contact = () => {
  const [completed, setCompleted] = useState(false);
  useGSAP(() => {
    initContactAnimations(completed);
  }, [completed]);
  return (
    <section className="contact-section section" id="contact">
      <div className="contact">
        <ContactInfo setCompleted={setCompleted} />
        <ContactForm />
      </div>
    </section>
  );
};

const ContactInfo = ({ setCompleted }) => {
  const { start } = useRender();
  return (
    <div className="contact-info">
      <p className="contact-subtitle">Contact me</p>
      <h2 className="contact-title">
        <Scrambler
          text="Get In Touch"
          canRun={start}
          setCompleted={setCompleted}
          speed={40}
        />
      </h2>
      <p className="contact-text">
        It is very important for us to keep in touch with you, so we are always
        ready to answer any question that interests you.
      </p>
      <SocialIcons bg="black" />
    </div>
  );
};

export default Contact;
