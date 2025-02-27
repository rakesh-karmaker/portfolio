import ContactForm from "@/components/forms/contact/ContactForm";
import SocialIcons from "@/components/ui/socialIcons/SocialIcons";

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

export default Contact;
