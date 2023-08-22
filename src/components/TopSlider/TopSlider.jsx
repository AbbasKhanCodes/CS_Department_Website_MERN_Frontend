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
            <div className={`${Styles.container}`}>
              <div className={`${Styles.textDetail}`}>
                <h3>CREATIVE WORKSHOP</h3>
                <h1>BUILDING PROFESSIONAL WEBSITE</h1>
                <h5>AN EASY INTRODUCTION TO WORDPRESS DEVELOPMENT.</h5>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={`${Styles.container} ${Styles.container2}`}>
              <div className={`${Styles.textDetail}`}>
                <h1>CERTIFICATE DISTRIBUTION</h1>
                <h2>AT WORKSHOP</h2>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default TopSlider;
