import { useEffect, useRef, useState } from "react";
import { designList } from "@/services/data";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import DesignsSwiper from "@/components/sliders/designs/DesignsSwiper";

import "./designs.css";
import Scrambler from "@/utils/Scrambler";
import { useRender } from "@/contexts/RenderContext";

const Designs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      try {
        sliderRef.current.slideTo(currentIndex);
      } catch (error) {
        console.error("Error sliding to current index:", error);
      }
    }
  }, [currentIndex]);

  return (
    <section className="designs-container" id="designs">
      <DesignsHeader
        index={currentIndex}
        setIndex={setCurrentIndex}
        setCompleted={setCompleted}
      />
      <DesignsSwiper
        designSliderRef={sliderRef}
        index={currentIndex}
        setIndex={setCurrentIndex}
        completed={completed}
      />
    </section>
  );
};

const DesignsHeader = ({ index, setIndex, setCompleted }) => {
  const { start } = useRender();
  const navigateLeft = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const navigateRight = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, designList.length - 1));
  };

  return (
    <div className="designs-header">
      <h2>
        <Scrambler
          text={"Creative Designs Made for My Clients"}
          speed={30}
          canRun={start}
          setCompleted={setCompleted}
        />
      </h2>
      <div className="designs-slider-nav">
        <p className="length">
          <span>{index + 1}</span> / <span>{designList.length}</span>
        </p>
        <div className="designs-nav-buttons">
          <button
            className="designs-nav-btn"
            onClick={navigateLeft}
            type="button"
            disabled={index === 0}
            aria-label="previous design"
          >
            <FaArrowLeft />
          </button>
          <button
            className="designs-nav-btn"
            onClick={navigateRight}
            type="button"
            disabled={index + 1 === designList.length}
            aria-label="next design"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designs;
