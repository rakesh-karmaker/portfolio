import { useEffect, useRef, useState } from "react";
import { designList } from "@/services/data";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import DesignsSwiper from "@/components/sliders/designs/DesignsSwiper";

import "./designs.css";

const Designs = () => {
  const [index, setIndex] = useState(0);
  const designSliderRef = useRef(null);

  useEffect(() => {
    if (designSliderRef.current) {
      designSliderRef.current.slideTo(index);
    }
  }, [index]);

  return (
    <section className="designs-container" id="designs">
      <DesignsHeader index={index} setIndex={setIndex} />
      <DesignsSwiper
        designSliderRef={designSliderRef}
        index={index}
        setIndex={setIndex}
      />
    </section>
  );
};

const DesignsHeader = ({ index, setIndex }) => {
  const handleLeftClick = () => {
    setIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  const handleRightClick = () => {
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
            onClick={handleLeftClick}
            type="button"
            disabled={index === 0}
          >
            <FaArrowLeft />
          </button>
          <button
            className="designs-nav-btn"
            onClick={handleRightClick}
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
