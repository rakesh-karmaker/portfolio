import { useState, useEffect, useRef } from "react";

const Scrambler = ({ text, speed = 55, canRun = true, ...rest }) => {
  const [currentText, setCurrentText] = useState("");
  const scramblerRef = useRef(null);
  const [inView, setInView] = useState(false);
  const letters = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
    if (!inView || !canRun) return;
    let iterations = 0;
    const interval = setInterval(() => {
      setCurrentText((prev) => {
        let newText = "";
        for (let i = 0; i < iterations; i++) {
          if (i < iterations - 1) {
            newText += text[i];
          } else {
            newText += letters[Math.floor(Math.random() * 26)];
          }
        }
        return newText;
      });

      if (iterations >= text.length) {
        clearInterval(interval);
        setCurrentText(text);
        rest?.setCompleted && rest.setCompleted(true);
      } else {
        iterations++;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, inView, canRun]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );
    observer.observe(scramblerRef.current);
    return () => observer.disconnect();
  }, [scramblerRef, canRun]);

  return <span ref={scramblerRef}>{currentText}</span>;
};

export default Scrambler;
