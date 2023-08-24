import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./TopSliderStyle.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

import Faculty from "../Faculty/Faculty";

function SlidingFaculty() {
  const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
  return (
    <>
      {/* Top Slider */}
      <div className={`${Styles.topSlider} topSlider`}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 4800,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Faculty />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default SlidingFaculty;
