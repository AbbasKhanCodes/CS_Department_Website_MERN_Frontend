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
            <img
              src="../images/topSlider/slider-1.jpg"
              alt="Picture of Coding in Laptop"
            />
            <div className={`${Styles.wrapper}`}>
              <h3 className={`${Styles.text}`}>
                Building the Future of Technology
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="../images/topSlider/slider-2.jpg"
              alt="Picture of circuit"
            />
            <div className={`${Styles.wrapper}`}>
              <h3 className={`${Styles.text}`}>
                Transforming Ideas into Reality
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default TopSlider;
