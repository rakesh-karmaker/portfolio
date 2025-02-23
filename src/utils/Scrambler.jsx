import { useState, useEffect } from "react";

const Scrambler = ({ text, speed = 55, ...rest }) => {
  const [currentText, setCurrentText] = useState("");
  const letters = "abcdefghijklmnopqrstuvwxyz";

  useEffect(() => {
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
        rest?.setCompleted(true);
      } else {
        iterations++;
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{currentText}</span>;
};

export default Scrambler;
