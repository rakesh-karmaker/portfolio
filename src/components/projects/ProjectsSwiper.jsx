import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { projectList } from "@/services/data";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

export const ProjectSwiper = ({ index }) => {
  const [swiperController, setSwiperController] = useState(null);

  useEffect(() => {
    if (swiperController) {
      swiperController.slideTo(index);
    }
  }, [index, swiperController]);

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      modules={[EffectFade]}
      className="projects-container project-img-container"
      onSwiper={(swiper) => setSwiperController(swiper)}
      allowTouchMove={false}
    >
      {projectList.map((project, i) => (
        <SwiperSlide key={i}>
          <img
            src={`/projects/${project.image}`}
            alt={projectList[index].title}
            className={"project-img max-w-[var(--max-elements-width)]!"}
            height={"100%"}
            width={"100%"}
          />
          {/* </Link> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
