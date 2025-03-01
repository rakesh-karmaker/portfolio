import { faqsList } from "@/services/data";
import { FaPlus } from "react-icons/fa6";

import "./faqs.css";
import { useState } from "react";
import { useRender } from "@/contexts/RenderContext";
import { useGSAP } from "@gsap/react";
import initFaqAnimations from "@/components/animations/faqAnimations";

const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const { start } = useRender();

  useGSAP(() => {
    initFaqAnimations(start);
  }, [start]);

  return (
    <section className="faqs-section section" id="faqs">
      <h2 className="faqs-title">Frequently Asked Questions</h2>
      <FaqsContainer activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
    </section>
  );
};

const FaqsContainer = ({ activeFaq, setActiveFaq }) => {
  return (
    <div className="faqs-container">
      <div className="faqs">
        {faqsList.slice(0, 3).map((faq, index) => {
          return (
            <Faq
              faq={faq}
              key={faq.question}
              index={index}
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          );
        })}
      </div>
      <div className="faqs">
        {faqsList.slice(3).map((faq, index) => {
          return (
            <Faq
              faq={faq}
              key={faq.question}
              index={index + 3}
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          );
        })}
      </div>
    </div>
  );
};

const Faq = ({ faq, index, activeFaq, setActiveFaq }) => {
  return (
    <div
      className={"faq clickable" + (index === activeFaq ? " open" : "")}
      onClick={() => {
        index === activeFaq ? setActiveFaq(null) : setActiveFaq(index);
      }}
    >
      <p className="question">
        {faq.question}{" "}
        <span className="plus">
          <FaPlus />
        </span>
      </p>
      <div className="answer-container">
        <p className="answer">{faq.answer}</p>
      </div>
    </div>
  );
};

export default Faqs;
