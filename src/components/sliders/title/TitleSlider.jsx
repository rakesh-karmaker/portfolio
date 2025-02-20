import React, { useRef } from "react";
import { SplitText } from "@cyriacbr/react-split-text";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "./TitleSlider.css";

const Text = ({ className, children }) => {
  return (
    <SplitText
      className={`text${className ? `-${className}` : ""}`}
      LineWrapper={({ lineIndex, children }) => (
        <span className="">{children}</span>
      )}
      WordWrapper={({ wordIndex, countIndex, children }) => (
        <span className="word-wrapper">{children}</span>
      )}
    >
      {children}
    </SplitText>
  );
};

const TitleSlider = () => {
  const ref = useRef();
  const tl = useRef();

  useGSAP(
    () => {
      tl.current = gsap.timeline({ repeat: -1 });

      gsap.utils.toArray(".textBox").forEach((box) => {
        tl.current
          .from(box, {
            autoAlpha: 0,
            yPercent: 40,
          })
          .to(box, {
            yPercent: 0,
          })
          .to(
            box,
            {
              autoAlpha: 1,
              duration: 0.5,
            },
            "<"
          )
          .to(box, {
            autoAlpha: 0,
            duration: 0.6,
          })
          .to(
            box,
            {
              yPercent: -100,
            },
            "<+0.35"
          );
      });
    },
    { scope: ref }
  );

  return (
    <div className="title-slider" ref={ref}>
      <div className="ticker">
        <div className="textBoxes">
          <div className="textBox">
            <Text>Web&nbsp;Developer</Text>
          </div>
          <div className="textBox">
            <Text>UI&nbsp;Designer</Text>
          </div>
          <div className="textBox">
            <Text>UX&nbsp;Designer</Text>
          </div>
          <div className="textBox">
            <Text>Programmer</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSlider;
