import { useEffect, useRef, useState } from "react";
import { designList } from "@/services/data";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import DesignsSwiper from "@/components/sliders/designs/DesignsSwiper";

import "./designs.css";

const Designs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      <DesignsHeader index={currentIndex} setIndex={setCurrentIndex} />
      <DesignsSwiper
        designSliderRef={sliderRef}
        index={currentIndex}
        setIndex={setCurrentIndex}
      />
    </section>
  );
};

const DesignsHeader = ({ index, setIndex }) => {
  const navigateLeft = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const navigateRight = () => {
    setIndex((prevIndex) => Math.min(prevIndex + 1, designList.length - 1));
  };

  return (
    <div className="designs-header">
      <h2>Creative Designs Made for My Clients</h2>
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
          >
            <FaArrowLeft />
          </button>
          <button
            className="designs-nav-btn"
            onClick={navigateRight}
            type="button"
            disabled={index + 1 === designList.length}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Designs;
