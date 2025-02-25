import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./designsSwiper.css";
import { designList } from "@/services/data";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const DesignsSwiper = ({ designSliderRef, setIndex, index }) => {
  const maxWidth =
    window
      .getComputedStyle(document.body)
      .getPropertyValue("--max-elements-width") === "1550px"
      ? 1550
      : (90 * window.innerWidth) / 100;

  const offset = (window.innerWidth - maxWidth) / 2;
  const willCenter = index === 0 ? false : true;
  const willOffset = index === 0 ? offset : 0;
  return (
    <Swiper
      onSwiper={(swiper) => {
        designSliderRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        setIndex(swiper.realIndex);
      }}
      slidesPerView={"auto"}
      spaceBetween={50}
      className="designs-swiper"
      centeredSlides={true}
      breakpoints={{
        1600: {
          spaceBetween: 100,
          centeredSlides: willCenter,
          slidesOffsetBefore: willOffset,
        },
        1250: {
          spaceBetween: 50,
          slidesOffsetBefore: willOffset,
          slidesOffsetAfter: 0,
          centeredSlides: willCenter,
          allowTouchMove: false,
        },
        950: {
          slidesOffsetBefore: offset,
          slidesOffsetAfter: 50,
          centeredSlides: false,
        },
      }}
    >
      {designList.map((design) => (
        <SwiperSlide key={design.title} className="design-slide">
          <div className="design">
            <img src={"/designs/" + design.image} alt={design.title} />
            <p className="design-info">
              {design.title}, {design.description}
            </p>
            <Link to={design.link} target="_blank" className="design-link">
              Learn more <FaArrowRightLong />
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DesignsSwiper;
