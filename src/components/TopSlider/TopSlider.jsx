import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";

// import Styles
import Styles from "./TopSliderStyle.module.css";

function TopSlider() {
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
            <img src="../images/topSlider/1.jpg" alt="AWKUM top rank picture" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../images/topSlider/2.jpg" alt="AWKUM top rank picture" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../images/topSlider/3.jpg" alt="AWKUM top rank picture" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../images/topSlider/4.jpg" alt="AWKUM top rank picture" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../images/topSlider/5.jpg" alt="AWKUM top rank picture" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../images/topSlider/6.jpg" alt="AWKUM top rank picture" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default TopSlider;
