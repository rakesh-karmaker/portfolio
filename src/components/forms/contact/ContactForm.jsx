import { PrimaryButton } from "@/components/ui/btns/Btns";
import React, { useEffect, useRef } from "react";

import "./contactForm.css";

const ContactForm = () => {
  const [isSUbmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "8f2fe1fc-33ad-47bd-86b5-85cffb19a475");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitting(false);
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={onSubmit} className="contact-form">
        <div>
          <div className="combined-inputs">
            <TextInput name="name">Full name</TextInput>
            <TextInput name="email" type="email">
              Email address
            </TextInput>
          </div>

          <div className="combined-inputs">
            <TextInput name={"number"} type={"number"}>
              Phone Number
            </TextInput>
            <TextInput name={"subject"}>Subject</TextInput>
          </div>
          <textarea
            name="message"
            required
            placeholder="Write your message here"
          ></textarea>
        </div>

        <PrimaryButton type="submit" disabled={isSUbmitting}>
          {isSUbmitting ? "Sending..." : "Send Message"}
        </PrimaryButton>
      </form>
    </div>
  );
};

const TextInput = ({ children, name, type = "text" }) => {
  const [isFilled, setIsFilled] = React.useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleReset = () => {
      setIsFilled(false);
    };

    const form = inputRef.current.closest("form");
    form.addEventListener("reset", handleReset);

    return () => {
      form.removeEventListener("reset", handleReset);
    };
  }, []);

  return (
    <div className="text-input">
      <label htmlFor={name} className={isFilled ? "filled" : ""}>
        {children}
      </label>
      <input
        ref={inputRef}
        type={type}
        required
        name={name}
        id={name}
        onFocus={() => setIsFilled(true)}
        onBlur={(e) => {
          if (e.target.value === "") {
            setIsFilled(false);
          }
        }}
        onChange={(e) => {
          if (e.target.value !== "") {
            setIsFilled(true);
          }
        }}
      />
    </div>
  );
};

export default ContactForm;
