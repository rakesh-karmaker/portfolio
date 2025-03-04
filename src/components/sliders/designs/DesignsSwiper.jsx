import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./designsSwiper.css";
import { designList } from "@/services/data";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import initDesignAnimations from "@/components/animations/designAnimations";

const DesignsSwiper = ({ designSliderRef, setIndex, index, completed }) => {
  const maxWidth =
    window
      .getComputedStyle(document.body)
      .getPropertyValue("--max-elements-width") === "1550px"
      ? 1550
      : (90 * window.innerWidth) / 100;

  const offset = (window.innerWidth - maxWidth) / 2;

  useGSAP(() => {
    initDesignAnimations(completed);
  }, [completed]);

  return (
    <Swiper
      //* configuration for the designs swiper
      onSwiper={(swiper) => {
        designSliderRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setIndex(swiper.realIndex);
      }}
      slidesPerView={"auto"}
      spaceBetween={window.innerWidth >= 1600 ? 100 : 50}
      className="designs-swiper"
      slidesOffsetBefore={
        window.innerWidth > 950 && window.innerWidth < 1250
          ? 50
          : index === 0 && window.innerWidth > 950
          ? offset
          : 0
      }
      centeredSlides={index === 0 && window.innerWidth > 950 ? false : true}
      allowTouchMove={window.innerWidth > 1250 ? false : true}
      slidesOffsetAfter={
        window.innerWidth > 950 && window.innerWidth < 1250 ? 50 : 0
      }
    >
      {designList.map((design) => (
        <SwiperSlide key={design.title} className="design-slide">
          <div className="design">
            <Link to={design.link}>
              <img
                src={"/designs/" + design.image}
                alt={design.title}
                height="100%"
                width="100%"
              />
            </Link>
            <p className="design-info">
              {design.title}, {design.description}
            </p>
            <Link to={design.link} target="_blank" className="design-link">
              See Design <FaArrowRightLong />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DesignsSwiper;
