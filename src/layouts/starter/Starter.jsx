import Scrambler from "@/utils/Scrambler";

import "./Starter.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { useRender } from "@/contexts/RenderContext";

const Starter = () => {
  const [completed, setCompleted] = useState(false);
  const { setStart } = useRender();
  useGSAP(() => {
    if (!completed) return null;

    const tl = gsap
      .timeline()
      .to(".starter-text", { autoAlpha: 0, duration: 0.3, delay: 0.3 })
      .to(".starter", { y: "-100vh", duration: 0.3, ease: "power1.out" });

    if (!tl.isActive()) {
      setStart(true);
    }
  }, [completed]);

  return (
    <div className="starter">
      <p className="starter-text">
        <Scrambler text="Hello There" speed={50} setCompleted={setCompleted} />
      </p>
    </div>
  );
};

export default Starter;
